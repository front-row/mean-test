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

router.post("/:t_id/:p_id/", (request, response) => {
  console.log("POST api/transaction/" + request.params.t_id + "/" + request.params.p_id);
  transactionApi.addProduct(request, response);
});

router.delete("/:t_id/:p_id/", (request, response) => {
  console.log("DELETE api/transaction/" + request.params.t_id + "/" + request.params.p_id);
  transactionApi.removeProduct(request, response);
});


module.exports = router;
