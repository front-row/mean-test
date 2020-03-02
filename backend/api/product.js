const Product = require('../models/products.js');

function handleError(response, message)
{
	console.log("ERROR: " + message);
	response.status(500).json({"error": message});
}

module.exports = {
	//Find All Products
	getAllProducts: (req, response) =>
	{
		Product.find({}, (err, products) =>
		{
			if(err) 
			{
				handleError(response, err.message);
			}
			response.status(200)
			response.send(products);
		});
	},

	//Find One Product
	getProduct: (req, response) =>
	{
		Product.findById(req.params.id, (err, product) =>
		{
			if(err) 
			{
				handleError(response, err.message);
			}
			response.status(200);
			response.send(product);
		});
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
		Product.findById(req.params.id, (err, product) =>
		{
			if (!product) {
				handleError(response, err.message);
			}
			else
			{
				// Else update all the data
				for(const key of Object.keys(req.body)) {
					product[key] = req.body[key];
				}
				product.save((err, product) => {
					if(err) {
						handleError(response, err.message);
					}
					response.status(200);
					response.send(product);
				});
			}
		});
	},

	// Delete product
	deleteProduct: (req, response) => {
		Product.deleteOne({_id: req.params.id}, (err, result) => {
			if(err) {
				handleError(response, err.message);
			}
			response.status(200);
			response.send(result);
		});
	}
};