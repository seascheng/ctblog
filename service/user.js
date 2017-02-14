var User = require('../model/user')

var addUser = (email, pass, cb)=>{
	if (!email.endsWith('@centling.com')) {
		cb(-1, 'Invalid email, it should be a centling email');
	};
	var po = new Promise(function(resolve, reject) {
	});
	po.then(()=>{
		Logger.info("111111");
		User.findOne({user_email: email}, (err, result) => {
			if (result) {
				cb(-1, 'Existed email!');
			}
		})
	});



	User.findOne({user_email: email}).exec((err, result)=>{
		Logger.info("1");
		return result;
	}).then((result)=>{
		Logger.info("2");
		if (result) {
			// return Promise.reject('Invalid email, it should be a centling email');
			throw "Invalid email, it should be a centling email";
		}
	}).then(() => {
		Logger.info("3");
		var emailList = email.split('@');
		var nickName = emailList[0];
		var user = new User({
			user_email: email,
			user_pass: pass,
			user_nickname: nickName,
			user_url: 'www.seas.site',
			user_status: '1'
		});
		Logger.info(nickName);
		user.save(function (err) {
			Logger.info(err.message);
			if (err) {
				return err.message;
			}else{
				return user;
			}
		})
	}).then((error)=>{
		Logger.info("4");
		if (error){
			Logger.info("4444");
  			throw error.message;
  		}else{
  			result = "Login success";
  			return result;
  		};
	}).catch(
		error =>{
			Logger.info("有错误 "+error);
			cb(-1, error);
		}
	);
	// var emailList = email.split('@');
	// var nickName = emailList[0];
	// var user = new User({
	// 	user_email: email,
	// 	user_pass: pass,
	// 	user_nickname: nickName,
	// 	user_url: 'www.seas.site',
	// 	user_status: '1'
	// });
	// user.save(function (err) {
 //  		if (err){
 //  			cb(-1, err);
 //  		}else{
 //  			cb(0, 'Signin success');
 //  		};
  		
 //  	// saved!
	// })
}

var findUserByEmail = (email)=>{
	if (!email) {
		return nil;
	}
	User.findOne({user_email: email}, (err, result) => {
		if (result) {
			cb(-1, 'Existed email!');
		}
	})
}

exports.addUser = addUser;
