const mongoose = require('mongoose');

//File Schema
const EmployeeSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{ 
        type: String,
        required: true
    },
    EmployeeType:{
      type: String,
      required: true
    },
    Password:{
        type: String,
        required: true
    },
    EmployeeID:{
        type: Number,
        required: true
    }
});

const Employee = module.exports = mongoose.model('Employee', EmployeeSchema);