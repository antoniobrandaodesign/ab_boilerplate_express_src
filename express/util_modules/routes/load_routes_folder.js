
var fs 	 = require('fs'),
var path = require('path');

// util method for multiple requires from folder

module.exports = function(app, route_dir)
{
	var files  = fs.readdirSync(route_dir);

	files.forEach(function (file)
	{
	    var filePath 	= path.resolve('./', route_dir, file);
	    var route 		= require(filePath);
    	
    	route.init(app);
	});
}