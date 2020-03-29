var express = require('express');
var router = express.Router();
var transactionApi = require('../api/transaction.js');

router.get("/", (request, response) => {
  console.log("GET api/transaction/");
  transactionApi.getAllTransactions(request, response);
});

router.get("/:id", (request, response) => {
  console.log("GET api/transaction/" + request.params.id);
  transactionApi.getTransaction(request, response, request.params);
});

router.post("/", (request, response) => {
  console.log("POST api/transaction/");
  transactionApi.addTransaction(request, response);
});

router.patch("/:id", (request, response) => {
  console.log("PATCH api/transaction/" + request.params.id);
  transactionApi.updateTransaction(request, response);
});

router.delete("/:id", (request, response) => {
  console.log("DELETE api/transaction/" + request.params.id);
  transactionApi.deleteTransaction(request, response);
});

router.post("/:t_Id/:p_Id/", (request, response) => {
  console.log("POST api/transaction/" + request.params.t_Id + "/" + request.params.p_Id);
  transactionApi.addProduct(request, response);
});

router.delete("/:t_Id/:p_Id/", (request, response) => {
  console.log("DELETE api/transaction/" + request.params.t_Id + "/" + request.params.p_Id);
  transactionApi.removeProduct(request, response);
});

router.patch("/:t_Id/:p_Id/", (request, response) => {
  console.log("PATCH api/transaction/" + request.params.t_Id + "/" + request.params.p_Id);
  transactionApi.editQuantity(request, response);
});


module.exports = router;
