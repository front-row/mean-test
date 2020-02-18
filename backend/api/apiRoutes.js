var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
const Employee = require('./models/employees.js');
const Product = require('./models/employees.js');

var EMPLOYEES_DB = "employees";

var app = express();
app.use(bodyParser.json());

// Link to the dist angular build directory (for Heroku's sake)
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

var db;

Employee.findByID(object)

mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", (err, client) =>
{
	if(err)
	{
		console.log(err);
		process.exit(1);
	}

	db = client.db();
	console.log("Database connection ready");

	var server = app.listen(process.env.PORT || 8080, () =>
	{
		var port = server.address().port;
		console.log("App now running on port " + port);
	});
});


function handleError(response, message)
{
	console.log("ERROR: " + message);
	res.status(500).json({"error": message});
}


//Find All Employee
app.get("/api/employee/ALL", (req, response) =>
{
	db.collection(EMPLOYEES_DB).find({}).toArray((err, data) =>
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
app.get("/api/employee/ID", (req, response) =>
{
	db.collection(EMPLOYEES_DB).find({req}).toArray((err, data) =>
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
app.post("/api/employee", (req, response) =>
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
app.patch("/employee", (req, response) =>
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
app.delete("/employee", (req, response) =>
{
	
});