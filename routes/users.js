var express = require('express');
var router = express.Router();
var counter=0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  counter++
  res.send('User accesses are:'+counter);
});

module.exports = router;
