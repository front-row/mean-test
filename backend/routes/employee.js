var express = require('express');
var router = express.Router();
var employeeApi = require('../api/employee.js');

router.get("/", (request, response) => {
  console.log("GET api/employee/");
  employeeApi.getAllEmployees(request, response);
});

router.get("/getCurrent", (request, response) => {
  console.log("GET api/employee/getCurrent");
  employeeApi.getEmployeeById(request, response, request.params);
});

router.get("/isManager", (request, response) => {
  console.log("GET api/employee/isManager");
  employeeApi.isEmployeeManager(request, response);
})

router.post("/", (request, response) => {
  console.log("POST api/employee/");
  employeeApi.addEmployee(request, response);
});

router.patch("/", (request, response) => {
  console.log("PATCH api/employee/");
  employeeApi.updateEmployee(request, response);
});

router.delete("/", (request, response) => {
  console.log("DELETE api/employee/");
  employeeApi.deleteEmployee(request, response);
});

module.exports = router;
