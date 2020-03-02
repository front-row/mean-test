const Employee = require('../models/employees.js');
const Product = require('../models/products.js');

function handleError(response, message)
{
	console.log("ERROR: " + message);
	res.status(500).json({"error": message});
}

module.exports = {
	//Find All Products
	getAllProducts: (req, response) =>
	{
		Product.find({}, (err, data) =>
		{
			if(err) 
			{
				handleError(response, err.message);
			}
			else
			{
				response.status(200).json(data);
			}
		});
	},

	//Find One Product
	getProduct: (req, response) =>
	{
		Product.find({req}, (err, data) =>
		{
			if(err) 
			{
				handleError(response, err.message);
			}
			else
			{
				response.status(200).json(data);
			}
		});
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
		Product.findById(req.params.id, (err, product) =>
		{
			if (!product)
			{
				return next(new Error("Could not load document!")); // If no issue presented, throw error
			}
			else
			{
				// Else update all the data
				product.name = req.body.name;                          
				product.count = req.body.count;
				product.LookupCode = req.body.LookupCode;

				product.save().then(product =>
				{
					res.json('Update done');
				}).catch(err => {handleError(response, err.message);});
			}
		});
	},

	// Delete product
	deleteProduct: (req, response) => {
		Product.deleteOne({productID: req.params.id}, (err, result) => {
			if(err) {
				handleError(response, err.message);
			}
			response.status(200);
			response.send(result);
		});
	}
};