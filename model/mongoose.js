var dbconfig = require('../config/config').mongodb;
var mongoose = require('mongoose');
mongoose.connect(dbconfig);

module.exports = mongoose;
