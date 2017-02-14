var mongoose = require('./mongoose');

var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var postSchema = new Schema({
	id : ObjectId,
	post_author : String,
	post_title : {
		type: String, 
		required: [true, 'Post title required']
	},
	post_content : String,
	post_excerpt : String,
	post_status :  String, 
	post_term : [{
		term_id : {
			type: Schema.Types.ObjectId,
			ref: 'Term'
		},
	}],
	post_category : [{
		category_id : {
			type: Schema.Types.ObjectId,
			ref: 'Category'
		}
	}],
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