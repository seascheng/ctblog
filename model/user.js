var mongoose = require('./mongoose');

var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var emailValidator = {
          validator: function(v) {
          	// var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            // return re.test(v);
            return v.endsWith('@centling.com');
          },
          message: '{VALUE} is not a valid centling email number!'
        };

var userSchema = new Schema({
	id : ObjectId,
	user_email : {
		type: String, 
		validate: emailValidator,
		required: [true, 'User email required']
	},
	user_pass : {
		type: String, 
		required: [true, 'User pass required']
	},
	user_nickname : {
		type: String, 
		required: [true, 'User nickname required']
	},
	user_url : String,
	user_status : {
		type: Number, 
		required: 0
	},
	display_name : String,
	meta : [{
		key : String,
		value: String
	}],
},{ 
	timestamps: true 
})
var User = mongoose.model('User', userSchema);
module.exports = User;