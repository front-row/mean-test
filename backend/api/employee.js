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
		Employee.find({}).toArray((err, data) =>
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
		Employee.find({req}).toArray((err, data) =>
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
		var NewEmployee = req.body;
		NewEmployee.createDate = new Date();
		if (!req.body.name)
		{
			handleError(res, "Invalid input");
		}
		else
		{
			db.collection(EMPLOYEES_DB).insertOne(NewEmployee, (err, data) =>
			{
				if(err)
				{
					handleError(res, err.message);
				}
				else
				{
					res.status(201).json(data.ops[0]);
				}
			});
		}
	},


	//Update Record
	updateEmployee: (req, response) =>
	{
		if(err) 
		{
			handleError(response, err.message);
		}
		else
		{
			//Update
		}
	},
};
