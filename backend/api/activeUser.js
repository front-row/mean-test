const ActiveUser = require("../models/activeUser.js");
const Employee = require("../models/employees.js");
var session = require('express-session');
const util = require('../util.js');


function logInEmployee(employee, request, response) {
	ActiveUser.findOne({employeeId: employee.employeeId}, (err, activeUser) => {
		if(err) {
			util.handleError(response, err.message);
		}
		if(activeUser) {
			activeUser.sessionId = request.session.id;
			activeUser.save((err) => {
				if(err) {
					util.handleError(response, err.message);
				}
				request.session.employeeId = employee.employeeId;
				request.session.isManager = employee.employeeType != "Cashier";
				response.status(200);
				response.send();
			})
		}
		else {
			var activeUser = new ActiveUser({employeeId: employee.employeeId, sessionId: request.session.id});
			activeUser.save((err) => {
				if(err) {
					util.handleError(response, err.message);
				}
				request.session.employeeId = employee.employeeId;
				request.session.isManager = employee.employeeType != "Cashier";
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
				util.handleError(response, err.message);
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
			logInEmployee(employee, request, response);
		});
	},
	
	//Find One Active Employee By employeeID
	getActiveEmployee: (request, response, params) =>
	{
		Employee.find({employeeID: params.employeeID}, util.handleQuery(response));
	},
	
	signOut: (request, response) => {
		console.log(request.session);
		request.session.destroy((err) => {});
		console.log("destroyed session?");
		ActiveUser.deleteOne({employeeID: request.body.employeeId}, (err, activeUser) => {
			if(err) {
				util.handleError(response, err.message);
			}
			else {
				response.status(200);
				response.send();
			}
		});
	},

	isLoggedIn: (sessionId, response) => {
		ActiveUser.findOne({sessionId: sessionId}, (err, data) => {
			if(err) {
				util.handleError(response, err.message);
			}
			else {
				console.log(data ? true : false);
				response.status(200).send(data ? true : false);
			}
		});
	},

	showAllLogins: (request, response) => {
		ActiveUser.find({}, util.handleQuery(response));
	}
};