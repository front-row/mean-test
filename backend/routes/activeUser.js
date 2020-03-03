var express = require('express');
var router = express.Router();

var activeUserApi = require('../api/activeUser.js');

router.post("/signIn", (request, response) => {
  console.log("POST api/auth/signIn/");
  activeUserApi.signIn(request, response);
});

router.post("/signOut", (request, response) => {
  console.log("POST api/auth/signOut/");
  activeUserApi.signOut(request, response);
});

router.get("/isLoggedIn", (request, response) => {
  console.log("GET /isLoggedIn" + request.sessionID);
  activeUserApi.isLoggedIn(request.sessionID, response);
});

router.get("/debug/all", (request, response) => {
  console.log("GET api/auth/debug/all/");
  activeUserApi.showAllLogins(request, response);
})

module.exports = router;
