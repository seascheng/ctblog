var express = require('express');
var favicon = require('serve-favicon');
// var logger = require('morgan');
var bodyParser = require('body-parser');

var config = require('./config/config')
var router = require('./routes/router.js');

var app = express();

// bodyParser
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// route
router(app);


app.listen(config.port, function () {
  console.log('CTBLOG listening on port 3000!');
});
