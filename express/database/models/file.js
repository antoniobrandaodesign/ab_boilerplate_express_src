var mongoose = require('mongoose');

// define the schema for our model
var _fileSchema = new mongoose.Schema(
{
	url: 				String,
	mimetype: 			String,
	original_extension: String,
	original_filename: 	String,
	unique_filename: 	String
});

// export schema
module.exports = FileSchema = _fileSchema;

// create & export model
module.exports = File = mongoose.model('File', _fileSchema)