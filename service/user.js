var User = require('../model/user')

exports.signup = (email, pass, cb)=>{
	if (!email.endsWith('@centling.com')) {
		cb(-1, 'Invalid email, it should be a centling email');
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
	}).then(user => {
		cb(0, "Signup Success");
	}).catch(error =>{
		if (error.errors) {error = error.errors.user_pass.message;};
		Logger.info("signup error: "+error);
		cb(-1, error);
	});
}

exports.signin = (email, pass, cb)=>{
	User.findOne({user_email: email})
	.then(user =>{
		if (user) {
			if (pass == user.user_pass) {
				cb(0, "Signin Success");
			}else{
				throw "Invalid Password";
			}
		}else{
			throw "Unexisted Email";
		}
	}).catch(error =>{
		if (error.errors) {error = error.errors.user_pass.message;};
		Logger.info("signin error: "+error);
		cb(-1, error);
	});
}

