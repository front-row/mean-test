//Mongooooooose
var express = require("express");
var bodyParser = require("body-parser");
var apiRoutes = require("./backend/api/apiRoutes.js");

// to connect to the db
const db = require("./db.js") 

var app = express();
app.use(bodyParser.json());

// Link to the dist angular build directory (for Heroku's sake)
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// use api routes
app.use("/api", apiRoutes);

//Affirm connection to server
app.listen(process.env.PORT || 8080, ()=>{
  var port = app.address().port;
  console.log('Server started at port:'+port);
})