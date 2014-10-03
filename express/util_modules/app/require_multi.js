
var fs 	 = require('fs');
var path = require('path');

// util method for multiple requires from folder

module.exports = function(route_dir, app)
{
	var files  = fs.readdirSync(route_dir);

	files.forEach(function (file)
	{
		console.log(path.resolve(ROOT_DIR, route_dir, file));
	    require( path.resolve(ROOT_DIR, route_dir, file) );
	});
}