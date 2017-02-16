var router = require('express').Router();
var User = require('../model/user')
var response = require('../utils/response')
var checkNotLogin = require('../middlewares/check').checkNotLogin;

// POST /user/signup 注册
router.post('/signup', (req, res, next) => {
	var email = req.body.email;
	var pass = req.body.pass;

  	if (!email.endsWith('@centling.com')) {
  		response(res, -1, 'Invalid email, it should be a centling email');
	};

	User.findOne({user_email: email})
	.then(user =>{
		if (user) {
			throw "Existed Email";
		}else{
			var emailList = email.split('@');
			var nickName = emailList[0];
			var user = new User({
				user_email: email,
				user_pass: pass,
				user_nickname: nickName,
				user_url: 'www.seas.site',
				user_status: '1'
			});
			return user.save();
		}
	}).then(result => {
		response(res, 0, result);
	}).catch(error =>{
		response(res, -1, ""+error);
	});
});

// POST /user/signin 登录
router.post('/signin', (req, res, next) => {
	var email = req.body.email;
	var pass = req.body.pass;

  	User.findOne({user_email: email})
	.then(user =>{
		if (user) {
			if (pass == user.user_pass) {
				response(res, 0, user);
			}else{
				throw "Invalid Password";
			}
		}else{
			throw "Unexisted Email";
		}
	}).catch(error =>{
		response(res, -1, ""+error);
	});
});

module.exports = router;