var mongoose = require('mongoose');

// define the schema for our model
var _i18nstringSchema = mongoose.Schema({

    key:   String,
    value: String,
    lang:  { type: String, default: 'en' }
});

// export schema
module.exports = I18NStringSchema = _i18nstringSchema;

// create & export model
module.exports = I18NString = mongoose.model('I18NString', _i18nstringSchema);