var express = require('express');
var router = express.Router();

router.get("dummy", (request, response) => {
  response.body = "DUMMY";
});

module.exports = router;
