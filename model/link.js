var mongoose = require('./mongoose');

var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var linkSchema = new Schema({
	id : ObjectId,
	user_id : {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	link_name : {
		type : String,
		required : [true, 'Link name required']
	},
	link_url : {
		type : String,
		required : [true, 'Link url required']
	},
	timestamps:{},
})
var Link = mongoose.model('Link', linkSchema);
module.exports = Link;