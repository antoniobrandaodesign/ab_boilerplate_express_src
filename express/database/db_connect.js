var mongoose = require('mongoose');

// connect to db

// // local development
var db = mongoose.connect("mongodb://localhost/postme_io_1");

// // on nodejitsu
// var db = mongoose.connect("mongodb://nodejitsu_antoniobrandao:dmj1rnbp6cajnp56deb7rtt8b3@ds029950.mongolab.com:29950/nodejitsu_antoniobrandao_nodejitsudb5071157733");

// // on nodejitsheroku
// var db = mongoose.connect("mongodb://antoniobrandao:speedme000@ds039737.mongolab.com:39737/heroku_app23900051");

// module.exports.db = db;

