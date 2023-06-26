var express = require('express');
var router = express.Router();

const data = {
  title: "First Express Web Server",
  description: "We are using express to serve HTML using a Jade template.",
  subtitle: "JADE and Express",
  link: "https://bocacode.com",
  linkText: "Boca Code",
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', data);
});

module.exports = router;
