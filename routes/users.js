var express = require('express');
var router = express.Router();

var time = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {

  time += 1;

  res.send(`Sum is: ${time}`);
});

module.exports = router;
