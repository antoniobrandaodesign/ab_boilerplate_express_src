var mongoose = require('mongoose');

// define the schema for our model
var _externalvideoblockSchema = mongoose.Schema({

    url: 		String,
    title: 		String,
    descrption: String
});

// export schema
module.exports = ExternalVideoBlockSchema = _externalvideoblockSchema;

// create & export model
module.exports = ExternalVideoBlock = mongoose.model('ExternalVideoBlock', _externalvideoblockSchema);