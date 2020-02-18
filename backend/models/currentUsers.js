const mongoose = require('mongoose');

const CurrentUserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{ 
        type: String,
        required: true
    },
    employeeID:{ // references Employee schema 
        type: Number,
        required: true
    },
    active:{
      type: Boolean,
      required: true
    },
    employeeType:{
        type: String,
        required: true
    },
    manages:{ // array of IDs of employees this person manages
        type: Array,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    createdOn:{
        type: Date,
        required: true
    }
    
});

const CurrentUser = module.exports = mongoose.model('CurrentUser', CurrentUserSchema);