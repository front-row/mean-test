var express = require('express');
var router = express.Router();
var employeeApi = require('../api/employee.js');

router.get("/", (request, response) => {
  console.log("GET api/employee/");
  employeeApi.getAllEmployees(request, response);
});

router.get("/:id", (request, response) => {
  console.log("GET api/employee/" + request.params.id);
  employeeApi.getEmployee(request, response, request.params);
});

router.get("/:employeeId", (request, response) => {
  console.log("GET api/employee/byId/" + request.params.employeeId);
  employeeApi.getEmployeeById(request, response, request.params);
});

router.get("/:id/isManager", (request, response) => {
  console.log("GET api/employee/"+request.params.id+"/isManager");
  employeeApi.isEmployeeManager(request, response);
})

router.post("/", (request, response) => {
  console.log("POST api/employee/");
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
