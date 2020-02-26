const Employee = require('../models/employees.js');

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
			response.status(200);
			response.send(data);
		});
	},

	//Find One Employee
	getEmployee: (req, response, params) =>
	{
		Employee.findById(params.id, (err, employee) =>
		{
			if(err) 
			{
				handleError(response, err.message);
			}
			response.status(200);
			response.send(employee);
		});
	},

	//Add Employee
	addEmployee: (req, response) =>
	{
		var employee = new Employee(req.body);
		employee.save((err, employee) => {
			if(err) {
				handleError(response, err.message);
			}
			response.status(200);
			response.send(employee);
		});
	},


	//Update Employee
	updateEmployee: (req, response) =>
	{
		Employee.findById(req.params.id, (err, employee) => {
			if(!employee) {
				handleError(response, err.message);
			}
			else {
				for(const key of Object.keys(req.body)) {
					employee[key] = req.body[key];
				}
				employee.save((err, employee) => {
					if(err) {
						handleError(response, err.message);
					}
					response.status(200);
					response.send(employee);
				});
			}
		});
	},

	// Delete record
	deleteEmployee: (req, response) => {
		Employee.deleteOne({_id: req.params.id}, (err, result) => {
			if(err) {
				handleError(response, err.message);
			}
			response.status(200);
			response.send(result);
		});
	}
};
