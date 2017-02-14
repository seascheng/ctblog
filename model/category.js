var mongoose = require('./mongoose');

var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var categorySchema = new Schema({
	id : ObjectId,
	user_id : String,
	category_name : {
		type : String,
		required : [true, 'Category required']
	},
	timestamps:{},
})
var Category = mongoose.model('Category', categorySchema);
module.exports = Category;