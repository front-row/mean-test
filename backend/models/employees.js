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
    active:{
      type: Boolean,
      required: true,
      default: true
    },
    employeeType:{
        type: String,
        required: true
    },
    manages:{ // array of IDs of employees this person manages
        type: Array,
        required: true,
        default: []
    },
    password:{
        type: String,
        required: true
    },
    createdOn:{
        type: Date,
        required: true,
        default: Date.now()
    }
});

const Employee = module.exports = mongoose.model('Employee', EmployeeSchema);
