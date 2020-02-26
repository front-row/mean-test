var express = require('express');
var router = express.Router();
const Employee = require('../models/employees.js');
var employeeApi = require('../api/employee.js');

router.get("/", (request, response) => {
  console.log("GET api/employee/");
  employeeApi.getAllEmployees(request, response);
});

router.get("/:id", (request, response) => {
  console.log("GET api/employee/id");
  employeeApi.getEmployee(request, response);
});


router.post("/", (request, response) => {
  console.log("POST api/employee/");
  employeeApi.addEmployee(request, response);
});

router.patch("/:id", (request, response) => {
  console.log("PATCH api/employee/");
  employeeApi.updateEmployee(req, response);
});

module.exports = router;
