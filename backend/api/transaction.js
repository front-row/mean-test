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
	deleteTransaction: (req, response) => {
		Transaction.deleteOne({_id: req.params.id}, util.handleQuery(response));
	},

	// Add a product to transaction
	addProduct: (req, response) => {
		Transaction.findByIdAndUpdate(req.params.t_id, {
			$push: {
				"products": {
						"productId": req.params.p_id, 
						"count": req.body.count
					}
			}
		}, {useFindAndModify: false}, util.handleQuery(response))
	},

	// Remove a product from transaction
	removeProduct: (req, response) => {

	},

	// Set number of products in transaction
	editQuantity: (req, response) => {
		
	}

};