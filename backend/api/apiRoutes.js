var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
const Employee = require('./models/employees.js');
const Product = require('./models/products.js');
const CurrentUser = require('./models/currentUsers.js');

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


// Update Record
app.put("/updateEmployee/:id", (req, response) =>
{
	Employee.findById(req.params.id, (err, employee) => {
		if (!employee)
            return next(new Error("Could not load document!"));     // If no issue presented, throw error
        else {
            employee.firstName = req.body.firstName;                           // Else update all the data
            employee.lastName = req.body.lastName;
            employee.employeeID = req.body.employeeID;
            employee.active = req.body.active;
			employee.employeeType = req.body.employeeType;
			employee.manages = req.body.manages;
			employee.password = req.body.password;
			employee.createdOn = req.body.createdOn;

            employee.save().then(employee => {
                res.json('Update done');
            }).catch(err => {
                handleError(response, err.message);
            });
        }
	});
		/*
		if(err) 
		{
			handleError(response, err.message);
		}
		else
		{
			
			//Update
		}*/
});

//Signout
app.delete("/signout", (req, response) =>
{
	
});