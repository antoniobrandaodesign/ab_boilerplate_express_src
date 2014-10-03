var mongoose = require('mongoose');

// define the schema for our model
var _textblockSchema = mongoose.Schema({

    tag:         { type: String, default: 'p' },
    i18nstring:  [ I18NStringSchema ]
});

// export schema
module.exports = TextBlockSchema = _textblockSchema;

// create & export model
module.exports = TextBlock = mongoose.model('TextBlock', _textblockSchema);