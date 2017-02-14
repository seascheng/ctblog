var mongoose = require('./mongoose');

var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var termSchema = new Schema({
	id : ObjectId,
	term_name : {
		type : String,
		required : [true, 'Term required']
	},
	term_slug : String,
	meta : [{
		key : String,
		value: String
	}],
	timestamps:{},
})
var Term = mongoose.model('Term', termSchema);
module.exports = Term;