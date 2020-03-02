var express = require('express');
var router = express.Router();
const Product = require('../models/products.js');
var productApi = require('../api/product.js');

router.get("/", (request, response) => {
  console.log("GET api/product/");
  employeeApi.getAllProducts(request, response);
});

router.get("/:id", (request, response) => {
  console.log("GET api/product/id" + request.params.id);
  employeeApi.getProduct(request, response, request.params);
});


router.post("/", (request, response) => {
  console.log("POST api/product/");
  console.log(request.body);
  employeeApi.addProduct(request, response);
});

router.patch("/:id", (request, response) => {
  console.log("PATCH api/product/");
  employeeApi.updateProduct(request, response);
});

router.delete("/:id", (request, response) => {
  console.log("DELETE api/product/" + request.params.id);
  employeeApi.deleteProduct(request, response);
});

module.exports = router;
