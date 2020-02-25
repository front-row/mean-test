const Employee = require('../models/employees.js');
const Product = require('../models/employees.js');

function handleError(response, message)
{
	console.log("ERROR: " + message);
	response.status(500).json({"error": message});
}

module.exports = {
	//Find All Employee
	getAllEmployees: (req, response) =>
	{
		Employee.find({}, (err, data) =>
		{
			if(err) 
			{
				handleError(response, err.message);
			}
			else
			{
				response.status(200).json(data);
			}
		});
	},

	//Find One Employee
	getEmployee: (req, response, params) =>
	{
		Employee.findOne({employeeID: params.id}, (err, data) =>
		{
			if(err) 
			{
				handleError(response, err.message);
			}
			else
			{
				response.status(200).json(data);
			}
		});
	},

	//Add Employee
	addEmployee: (req, response) =>
	{
		var data = req.body;
		if(! data.manages) {
			data.manages = [];
		}
		data.createdOn = Date.now();
		var employee = new Employee(data);
		employee.save((err, employee) => {
			if(err) {
				handleError(response, err.message);
			}
			response.send(employee);
		});
	},


	//Update Record
	updateEmployee: (req, response) =>
	{
		Employee.findById(req.params.id, (err, employee) =>
		{
			if (!employee)
			{
				return next(new Error("Could not load document!")); // If no issue presented, throw error
			}			
			else
			{
				// Else update all the data
				employee.firstName = req.body.firstName;                          
				employee.lastName = req.body.lastName;
				employee.employeeID = req.body.employeeID;
				employee.active = req.body.active;
				employee.employeeType = req.body.employeeType;
				employee.manages = req.body.manages;
				employee.password = req.body.password;
				employee.createdOn = req.body.createdOn;

				employee.save().then(employee =>
				{
					response.json('Update done');
				}).catch(err => {handleError(response, err.message);});
			}
		});
	}
};
