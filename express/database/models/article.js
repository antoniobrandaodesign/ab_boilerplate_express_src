var mongoose = require('mongoose');

// define the schema for our model
var _articleSchema = mongoose.Schema({

    title:          {   type: String, default: 'Default Title'    },
    subtitle:       {   type: String, default: 'Default Subtitle' },
    date:           {   type: Date,   default: Date.now()     },
    author:         {   type: String, default: 'Default author'   },
    main_media:     [MediaSchema],
    blocks:         [ContentBlockSchema]
});

// export schema
module.exports = ArticleSchema = _articleSchema;

// create & export model
module.exports = Article = mongoose.model('Article', _articleSchema);