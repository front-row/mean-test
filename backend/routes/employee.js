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
  console.log(request.params);
  employeeApi.getEmployee(request, response, request.params);
});


router.post("/", (request, response) => {
  console.log("POST api/employee/");
<<<<<<< HEAD
=======
  console.log(request.body);
>>>>>>> 76d862651de93430ba4acde5da0191715b88a4d1
  employeeApi.addEmployee(request, response);
});

router.patch("/:id", (request, response) => {
  console.log("PATCH api/employee/");
  employeeApi.updateEmployee(request, response);
});

router.delete("/:id", (request, response) => {
  console.log("DELETE api/employee/" + request.params.id);
  employeeApi.deleteEmployee(request, response);
});

module.exports = router;
