// Set up Express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const session = require('express-session');

//// Link to the dist angular build directory (for Heroku's sake)
const distDir = __dirname + "/dist/";
app.use(express.static(distDir));

//// Set up bodyParser
app.use(bodyParser.json());

// Set up cookie parser and sessions
app.use(cookieParser());
app.use(session({
  'secret': '343ji43j4n3jn4jk3n'
}))


//// Set up CORS allowance (so we can test angular locally)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next();
})

//// Set up Routes
const employeeRoutes = require("./backend/routes/employee.js");
const productRoutes = require("./backend/routes/product.js");
const signInRoutes = require("./backend/routes/activeUser.js");

app.use('/api/employee', employeeRoutes);
app.use('/api/product', productRoutes);
app.use('/api/auth', signInRoutes);


// to connect to the db
const db = require("./backend/db.js") 

//Affirm connection to server
app.listen(process.env.PORT || 8080, ()=>{
  var port = process.env.PORT || 8080;
  console.log('Server started at port:'+port);
})
