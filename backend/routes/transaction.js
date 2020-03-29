var express = require('express');
var router = express.Router();

var transactionApi = require('../api/transaction.js');

router.get("/", (request, response) => {
  console.log("GET api/transaction/");
  transactionApi.getAllTransactions(request, response);
});

router.get("/:id", (request, response) => {
  console.log("GET api/transaction/" + request.params.id);
  transactionApi.getTransaction(request, response);
});

router.post("/", (request, response) => {
  console.log("POST api/transaction");
  transactionApi.createTransaction(request, response);
});

router.delete("/:id", (request, response) => {
  console.log("DELETE api/transaction");
  transactionApi.deleteTransaction(request, response);
});

router.post("/:id", (request, response) => {
  console.log("POST /api/transaction/" + request.params.id);
  transactionApi.addProduct(request, response);
});

router.delete("/:t_id/:p_id", (request, response) => {
  console.log("DELETE /api/transaction/" + request.params.t_id + "/" + request.params.p_id);
  transactionApi.removeProduct(request, response);
});

router.put("/:t_id/:p_id/:new_quantity", (request, response) => {
  console.log("PUT /api/transaction/" + request.params.t_id + "/" + request.params.p_id + "/" + request.params.new_quantity);
  transactionApi.editQuantity(request, response);
});

module.exports = router;
