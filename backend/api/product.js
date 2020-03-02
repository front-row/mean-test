const Product = require('../models/products.js');
const util = require('../util.js');


module.exports = {
	//Find All Products
	getAllProducts: (req, response) =>
	{
		Product.find({}, util.handleQuery(response));
	},

	//Find One Product
	getProduct: (req, response) =>
	{
		Product.find({req}, util.handleQuery(response));
	},

	//Add Product
	addProduct: (req, response) =>
	{
		var NewProduct = req.body;
		NewProduct.createDate = new Date();
		if (!req.body.name)
		{
			handleError(res, "Invalid input");
		}
		else
		{
			db.collection(PRODUCTS_DB).insertOne(NewProduct, (err, data) =>
			{
				if(err)
				{
					handleError(res, err.message);
				}
				else
				{
					res.status(201).json(data.ops[0]);
				}
			});
		}
	},


	//Update Product
	updateProduct: (req, response) =>
	{
		Product.findByIdAndUpdate(req.params.id, req.body, util.handleQuery(response));
	},

	// Delete product
	deleteProduct: (req, response) => {
		Product.deleteOne({productID: req.params.id}, util.handleQuery(response));
	}
};