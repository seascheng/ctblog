var mongoose = require('./mongoose');

var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var categorySchema = new Schema({
	id : ObjectId,
	user_id : {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	category_name : {
		type : String,
		required : [true, 'Category required']
	},
	category_status :  {
		type : Number,
		default: 0
	},  //0:正常 1:已删除
},{ 
	timestamps: true 
})
var Category = mongoose.model('Category', categorySchema);
module.exports = Category;