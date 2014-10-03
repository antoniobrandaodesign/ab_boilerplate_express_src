var mongoose = require('mongoose');

// define the schema for our model
var _pageSchema = mongoose.Schema({

    title: 			{ type: String,  default: 'Default Page Title' },
    active: 		{ type: Boolean, default: false },
    url_key: 		String,
    article: 		[ArticleSchema]
});

// export schema
module.exports = PageSchema = _pageSchema;

// create & export model
module.exports = Page = mongoose.model('Page', _pageSchema);