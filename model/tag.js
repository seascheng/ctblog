var mongoose = require('./mongoose');

var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var tagSchema = new Schema({
	id : ObjectId,
	user_id : String,
	tag_name : {
		type : String,
		required : [true, 'Tag name required']
	},
	timestamps:{},
})
var Tag = mongoose.model('Tag', tagSchema);
module.exports = Tag;