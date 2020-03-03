const ActiveUser = require("../models/activeUser.js");
const Employee = require("../models/employees.js");
var session = require('express-session')

function handleError(response, message)
{
	console.log("ERROR: " + message);
	response.status(500).json({"error": message});
}

function logInEmployee(employee, response, request) {
	ActiveUser.findOne({employeeId: employee.employeeId}, (err, activeUser) => {
		if(err) {
			handleError(response, err.message);
		}
		if(activeUser) {
			// TODO
			console.log("Update the session token!");
			response.status(200);
			response.send();
			return;
		}
		else {
			var activeUser = new ActiveUser({employeeId: employee.employeeId, sessionId: request.session.id});
			activeUser.save((err) => {
				if(err) {
					handleError(response, err.message);
				}
				response.status(200);
				response.send();
			})
		}
	})
}

module.exports = {
	signIn: (request, response) => {
		var password = request.body.password;
		var employeeId = request.body.employeeId;
		Employee.findOne({employeeId: employeeId}, (err, employee) => {
			if(err) {
				handleError(response, err.message);
			}
			if(!employee) {
				response.status(404);
				response.send("EmployeeID " + employeeId + " not found.");
				return;
			}
			if(employee.password !== password) {
				response.status(401);
				response.send("Incorrect password.");
				return;
			}
			logInEmployee(employee, response, request);
		});
	},
	
	signOut: (request, response) => {
		request.session.destroy((err) {});
		ActiveUser.deleteOne({employeeID: request.body.employeeId}, (err, activeUser) => {
			if(err) {
				handleError(response, err.message);
			}
		});
	},

	showAllLogins: (request, response) => {
		ActiveUser.find({}, (err, logins) => {
			if(err) {
				handleError(response, err.message);
			}
			response.status(200);
			response.send(logins);
		})
	}
};