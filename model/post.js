var mongoose = require('./mongoose');

var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var postSchema = new Schema({
	id : ObjectId,
	post_user : {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
	post_title : {
		type: String, 
		required: [true, 'Post title required']
	},
	post_content : String,
	post_excerpt : String,
	post_status :  {
		type : Number,
		default: 0
	},  //0:正常 1:已删除
	post_term : [{
		term_id : {
			type: Schema.Types.ObjectId,
			ref: 'Term'
		},
	}],
	post_category :  {
		type: Schema.Types.ObjectId,
		ref: 'Category'
	},
	post_tag : [{
		tag_id : {
			type: Schema.Types.ObjectId,
			ref: 'Post'
		}
	}],
	comment_status : String,
	post_name : String,
	guid : String,
	view_count : Number,
	comment_count: Number,
	meta : [{
		key : String,
		value: String
	}],
	timestamps:{},
})
var Post = mongoose.model('Post', postSchema);
module.exports = Post;