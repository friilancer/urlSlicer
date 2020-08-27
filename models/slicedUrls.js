const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slicedUriSchema = new Schema({
	oldUri : {
		type: String,
		required : true
	},
	newUriCode : {
		type : String,
		required : true,
		unique: true
	},
	timesVisited : {
		type: Number,
		default : 0
	}
})

module.exports = SlicedUri = mongoose.model('SlicedUri', slicedUriSchema)