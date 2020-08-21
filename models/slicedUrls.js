const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const slicedUriSchema = new Schema({
	oldUri : {
		type: String,
		required : true
	},
	newUri : {
		type : String,
		unique: true
	}
})

module.exports = SlicedUri = mongoose.model('SlicedUri', slicedUriSchema)