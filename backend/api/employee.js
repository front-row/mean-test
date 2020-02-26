const Employee = require('../models/employees.js');
const Product = require('../models/employees.js');

function handleError(response, message)
{
	console.log("ERROR: " + message);
	res.status(500).json({"error": message});
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
	getEmployee: (req, response) =>
	{
		Employee.find({req}, (err, data) =>
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
				response.status(400);
				response.send('Bad request');
			}
			response.status(200);
			response.send(employee);
		});
	},


	//Update Record
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
						response.status(400);
						response.send('Bad request');
					}
					response.status(200);
					response.send(employee);
				});
			}
		});
	},

	// Delete record
	deleteEmployee: (req, response) => {
		Employee.deleteOne({employeeID: req.params.id}, (err, result) => {
			if(err) {
				handleError(response, err.message);
			}
			response.status(200);
			response.send(result);
		});
	}
};
