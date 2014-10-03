
var fs 		= require('fs');
var path 	= require('path');

/*
 * GET listing
 */

exports.list = function(req, res)
{
	File.find({}, function(err, docs)
	{
		if(err) 
		{
			res.json(err)
		}
		else
		{
			if (docs) 
			{
				res.json(docs);
			}
		}
	})
};


/*
 * GET single by id
 */

exports.oneById = function(req, res)
{
	res.json(req.file);
};


/*
 * POST new
 */

exports.create = function(req, res)
{
	var b = req.body;

	new File(
	{
		url: 				b.target_path,
		mimetype: 			b.mimetype,
		original_extension: b.original_extension,
		original_filename: 	b.filename,
		unique_filename: 	b.unique_filename

	}).save( function(err, file)
	{
		// if(err) res.json(err);
		// res.json(media);

		if(err) 
		{
			res.json(err)
		}
		else
		{
			if (media) 
			{
				res.json(file);
			};
		}
	});
};

/*
 * PUT single
 */

exports.update = function(req, res)
{
	var b 						= req.body;

	req.file.url 				= b.target_path,
	req.file.mimetype 			= b.mimetype,
	req.file.original_extension = b.original_extension,
	req.file.original_filename 	= b.filename,
	req.file.unique_filename 	= b.unique_filename

	req.file.save(function (err, item, numberAffected) 
	{
		if(err) 
		{
			res.json(err)
		}
		else
		{
			if (item) 
			{
				res.json(item);
			};
		}
	});
};


/*
 * DELETE single
 */

exports.remove = function(req, res)
{
	console.log('req.file.url: '+ req.file.url);

	fs.unlink(path.join('public/', req.file.url), function (err) 
	{
		if (err) throw err;
		console.log('successfully deleted /tmp/hello');

		req.file.remove(function(err) 
		{
			// if(err) res.json(err);
			// res.json('all good');

			if(err) 
			{
				res.json(err)
			}
			else
			{
				res.json('all good');
			}
		});
	});
};


