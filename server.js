var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var CONTACTS_COLLECTION = "contacts";

var app = express();
app.use(bodyParser.json());

var db;

mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", (err, client) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  db = client.db();
  console.log("Database connection ready");

  var server = app.listen(process.env.PORT || 8080, () => {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});


function handleError(response, message) {
  console.log("ERROR: " + message);
  res.status(500).json({"error": message});
}


app.get("/api/books", (req, response) => {
  db.collection(BOOKS_COLLECTION).find({}).toArray((err, data) => {
    if(err) {
      handleError(response, err.message);
    } else {
      response.status(200).json(data);
    }
  });
});

app.post("/api/books", (req, response) => {
  var newBook = req.body;
  newBook.createDate = new Date();
  if (!req.body.name) {
    handleError(res, "Invalid input");
  }
  else {
    db.collection(BOOKS_COLLECTION).insertOne(newBook, (err, data) => {
      if(err) {
        handleError(res, err.message);
      }
      else {
        res.status(201).json(data.ops[0]);
      }
    });
  }
});
