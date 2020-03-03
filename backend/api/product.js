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
		Product.findById(req.params.id, util.handleQuery(response));
	},

	//Add Product
	addProduct: (req, response) =>
	{
		var product = new Product(req.body);
		product.save((err, product) => {
			if(err) {
				handleError(response, err.message);
			}
			response.status(200);
			response.send(product);
		})
	},

	//Update Product
	updateProduct: (req, response) =>
	{
		Product.findByIdAndUpdate(req.params.id, req.body, util.handleQuery(response));
	},

	// Delete product
	deleteProduct: (req, response) => {
		Product.deleteOne({_id: req.params.id}, util.handleQuery(response));
	}
};