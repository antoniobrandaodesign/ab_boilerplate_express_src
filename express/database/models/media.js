var mongoose = require('mongoose');

// define the schema for our model
var _mediaSchema = new mongoose.Schema(
{
	title: 		String,
	lead: 		String,
	text: 		String,
	file: 		[FileSchema]
});

// export schema
module.exports = MediaSchema = _mediaSchema;

// create & export model
module.exports = Media = mongoose.model('Media', _mediaSchema);