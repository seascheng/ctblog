var mongoose = require('./mongoose');

var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var commentSchema = new Schema({
	id : ObjectId,
	user_id : {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	post_id : {
		type: Schema.Types.ObjectId,
		ref: 'Post'
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
	comment_status :  {
		type : Number,
		default: 0
	},  //0:正常 1:已删除
},{ 
	timestamps: true 
})
var Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;