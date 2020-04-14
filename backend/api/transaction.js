const Transaction = require('../models/transactions.js');
const util = require('../util.js');


module.exports = {
	//Find All Transactions
	getAllTransactions: (req, response) =>
	{
		Transaction.find({}, util.handleQuery(response));
	},

	//Find One Transaction
	getTransaction: (req, response) =>
	{
		Transaction.findById(req.params.id, util.handleQuery(response));
	},

	//Add Transaction
	addTransaction: (req, response) =>
	{
		var transaction = new Transaction(req.body);
		transaction.save(util.handleQuery(response));
	},

	//Update Transaction
	updateTransaction: (req, response) =>
	{
		Transaction.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, useFindAndModify: false},  util.handleQuery(response));
	},

	// Delete a Transaction
	deleteTransaction: (req, response) =>
	{
		Transaction.deleteOne({_id: req.params.id}, util.handleQuery(response));
	},

	// Add a product to transaction
	addProduct: (req, response) => 
	{
		Transaction.findById(req.params.t_id).exec(function(err, transaction) {
			if(err) {
				response.status(500).send(err);
				return;
			}
			var productAlreadyAdded = false;
			for(var i = 0; i < transaction.products.length; i++) {
				var productEntry = transaction.products[i]
				if(productEntry.productId == req.params.p_id) {
					productEntry.count = req.body.count; // set the count and move on
					productAlreadyAdded = true;
				}
			}
			if(productAlreadyAdded == false) {
				transaction.products.push({productId: req.params.p_id, count: req.body.count ? req.body.count : 1});
			}
			transaction.save({}, util.handleQuery(response));
		})
	},

	// Remove a product from transaction
	removeProduct: (req, response) => 
	{
		Transaction.findById(req.params.t_id).exec(function(err, transaction) {
			if(err) {
				response.status(500).send(err);
				return;
			}
			var newProducts = [];
			for(var i = 0; i < transaction.products.length; i++) {
				var productEntry = transaction.products[i];
				if(productEntry.productId != req.params.p_id) {
					newProducts.push(productEntry);
				}
			}
			transaction.products = newProducts;
			transaction.save({}, util.handleQuery(response));
		});
	}
};