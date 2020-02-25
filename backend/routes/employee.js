var express = require('express');
var router = express.Router();

var employeeApi = require('../api/employee.js');

router.get("/", (request, response) => {
  console.log("GET api/employee/");
  employeeApi.getAllEmployees(request, response);
});

router.get("/:id", (request, response) => {
  console.log("GET api/employee/id");
  console.log(request.params);
  employeeApi.getEmployee(request, response, request.params);
});

router.post("/", (request, response) => {
  console.log("POST api/employee/");
  console.log(request.body);
  employeeApi.addEmployee(request, response);
});

router.patch("/:id", (request, response) => {
  console.log("PATCH api/employee/");
  employeeApi.updateEmployee(request, response);
});

module.exports = router;
