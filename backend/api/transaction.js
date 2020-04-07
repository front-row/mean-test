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
		Transaction.find().sort({transactionId: -1}).limit(1).exec((err, transactionWithHighestId) => {
			if(transactionWithHighestId.length > 0) {
				transaction.transactionId = transactionWithHighestId[0].transactionId + 1;
			}
			else {
				transaction.transactionId = 1;
			}
			transaction.save(util.handleQuery(response));
		});

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
		Transaction.findByIdAndUpdate(req.params.t_id, {
			$push: {
				"transactions": {
					"productId": req.params.p_id, 
					"count": req.body.count
				}
			}
		}, util.handleQuery(response))
	},

	// Remove a product from transaction
	removeProduct: (req, response) =>
	{
		if(req.body.count > 0)
		{
			Transaction.findByIdAndUpdate(req.params.t_id, {
				$set: {
					"transactions": {
						"productId": req.params.p_id,
						"count": req.body.count
					}
				}
			}, util.handleQuery(response))
		}
		else
		{
			Transaction.findByIdAndUpdate(req.params.t_id, {
				$pull: {
					"transactions": {
						"productId": req.params.p_id,
					}
				}
			}, util.handleQuery(response))
		}
	},

	// Set number of products in transaction
	editQuantity: (req, response) =>
	{
		Transaction.findByIdAndUpdate(req.params.t_id, {
				$set: {
					"transactions": {
						"productId": req.params.p_id,
						"count": req.body.count
					}
				}
			}, util.handleQuery(response))
	}

};