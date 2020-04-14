const mongoose = require('mongoose');
const Product = require('./products.js');

// Just an initial prototype. Make changes as needed.
const TransactionSchema = mongoose.Schema({
        products: [
            {
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
            },
        ]
});

const Transaction = module.exports = mongoose.model('Transaction', TransactionSchema);
