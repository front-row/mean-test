const mongoose = require('mongoose');
const Product = require('./products.js');

// child schema that stores the products and counts
var productEntrySchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    count: {
        type: Number,
        required: true,
        default: 1
    }
}, {_id: false })

// Just an initial prototype. Make changes as needed.
const TransactionSchema = mongoose.Schema({
        products: [productEntrySchema]
});

const Transaction = module.exports = mongoose.model('Transaction', TransactionSchema);
