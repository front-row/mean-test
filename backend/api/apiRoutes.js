var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
const Employee = require('./models/employees.js');
const Product = require('./models/employees.js');

var app = express();
app.use(bodyParser.json());

// Link to the dist angular build directory (for Heroku's sake)
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

function handleError(response, message)
{
	console.log("ERROR: " + message);
	res.status(500).json({"error": message});
}


//Find All Employee
app.get("getEmployees", (req, response) =>
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
});

//Find One Employee
app.get("getEmployee", (req, response) =>
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
});

//Add Employee
app.post("addEmployee", (req, response) =>
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
});


//Update Record
app.patch("/updateEmployee", (req, response) =>
{
	if(err) 
	{
		handleError(response, err.message);
	}
	else
	{
		//Update
	}
});

//Signout
app.delete("/signout", (req, response) =>
{
	
});