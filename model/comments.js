var mongoose = require('./mongoose');

var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var commentSchema = new Schema({
	id : ObjectId,
	post_id : String,
	user_id : String,
	comment_content : {
		type : String,
		required : [true, 'Comment content required']
	},
	comment_approved : Number,
	comment_type : String, 
	comment_parent : String,
	timestamps:{},
})
var Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;