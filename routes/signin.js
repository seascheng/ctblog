var express = require('express');
var router = express.Router();

var response = require('../utils/response')

var checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET /signin 登录页
router.post('/', function(req, res, next) {
  response(res, 0, req.body);
});

module.exports = router;