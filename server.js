var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var BOOKS_COLLECTION = "books";

var app = express();
app.use(bodyParser.json());

var db;

mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", (err, client) => {
  if(err) {
    console.log(err);
    process.exit(1);
  }

  db = client.db();
  console.log("Database connection ready");

  var server = app.listen(process.env.PORT || 8080, () => {
    var port = server.address().port;
    console.log("App now running on port " + port);
  });
});


function handleError(response, message) {
  console.log("ERROR: " + message);
  res.status(500).json({"error": message});
}


app.get("/api/books", (req, response) => {
  db.collection(BOOKS_COLLECTION).find({}).toArray((err, data) {
    if(err) {
      handleError(response, err.message);
    } else {
      response.status(200).json(data);
    }
  });
});
