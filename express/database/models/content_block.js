var mongoose = require('mongoose');

// define the schema for our model
var _contentBlockSchema = new mongoose.Schema(
{
    type:           { type: String, default: 'TextBlock' },  // can be 'Media', 'TextBlock', 'ExternalVideoBlock'
    content_id:     mongoose.Schema.Types.ObjectId

    // content:        {}       // Mixed type
});

/*
    -> to save a block using 'Mixed'
    content_block.markModified('content');
    content_block.save();
*/

// export schema
module.exports = ContentBlockSchema = _contentBlockSchema;

// create & export model
module.exports = ContentBlock = mongoose.model('ContentBlock', _contentBlockSchema);