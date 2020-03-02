const Employee = require('../models/employees.js');
const util = require('../util.js');

module.exports = {
	//Find All Employee
	getAllEmployees: (req, response) =>
	{
		Employee.find({}, util.handleQuery(response));
	},

	//Find One Employee
	getEmployee: (req, response, params) =>
	{
		Employee.findById(params.id, util.handleQuery(response));
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
		employee.save(util.handleQuery(response));
	},


	//Update Employee
	updateEmployee: (req, response) =>
	{
		Employee.findByIdAndUpdate(req.params.id, req.body, util.handleQuery(response));
	},

	// Delete record
	deleteEmployee: (req, response) => {
		Employee.deleteOne({employeeID: req.params.id}, util.handleQuery(response));
	}
};
