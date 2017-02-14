var express = require('express');
var router = express.Router();
var userSevice = require('../service/user');
// var user = require('../model/user');

var response = require('../utils/response')

var checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET /signin 登录页
router.post('/', (req, res, next) => {
	var userEmail = req.body.email;
	var userPass = req.body.pass;
  	userSevice.addUser(userEmail, userPass, (code, result) => {
  		response(res, code, result);
  	});
});

module.exports = router;