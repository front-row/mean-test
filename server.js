// Set up Express
var express = require("express");
var app = express();
//// Link to the dist angular build directory (for Heroku's sake)
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
//// Set up bodyParser
var bodyParser = require("body-parser");
app.use(bodyParser.json());
//// Set up CORS allowance (so we can test angular locally)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next();
})
//// Set up Routes
var employeeRoutes = require("./backend/routes/employee.js");
app.use('/api/employee', employeeRoutes);


// to connect to the db
const db = require("./backend/db.js") 

//Affirm connection to server
app.listen(process.env.PORT || 8080, ()=>{
  var port = process.env.PORT || 8080;
  console.log('Server started at port:'+port);
})
