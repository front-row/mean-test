const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{ 
        type: String,
        required: true
    },
    employeeID:{
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

const Employee = module.exports = mongoose.model('Employee', EmployeeSchema);
