var mongoose = require('mongoose');

// define the schema for our model
var _messageSchema = new mongoose.Schema(
{
	sender: 	mongoose.Schema.Types.ObjectId,
	recipients: Array,
	content: 	String,
	key: 		String,
	token: 		String,
	created_at: Date,
	password: 	String,
});

// export schema
module.exports = MessageSchema = _messageSchema;

// create & export model
module.exports = Message = mongoose.model('Message', _messageSchema);