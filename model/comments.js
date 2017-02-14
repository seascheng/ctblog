var mongoose = require('./mongoose');

var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var commentSchema = new Schema({
	id : ObjectId,
	post_id : {
		type: Schema.Types.ObjectId,
		ref: 'Post'
	},
	user_id : {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	comment_content : {
		type : String,
		required : [true, 'Comment content required']
	},
	comment_approved : Number,
	comment_type : String, 
	comment_parent : {
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	},
	timestamps:{},
})
var Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;