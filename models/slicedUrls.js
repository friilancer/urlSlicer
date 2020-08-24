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
	}
})

module.exports = SlicedUri = mongoose.model('SlicedUri', slicedUriSchema)