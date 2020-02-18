const mongoose = require('mongoose');

//File Schema
const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    count:{
        type: Number,
        required: true
    },
    LookupCode:{
        type: Number,
        required: true
    }
});

const Product = module.exports = mongoose.model('Product', ProductSchema);