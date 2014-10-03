
var fs 		= require('fs');
var path 	= require('path');

/*
 * GET listing
 */

exports.list = function(req, res)
{
	Media.find({}, function(err, docs)
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
	res.json(req.media);
};


/*
 * POST new
 */

exports.create = function(req, res)
{
	var b = req.body;

	new Media(
	{
		title: b.title,
		subtitle: b.subtitle,
		description: b.description,
		file: b.file

	}).save( function(err, media)
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
				res.json(media);
			};
		}
	});
};

/*
 * PUT single
 */

exports.update = function(req, res)
{
	var b = req.body;

	req.media.title 		= b.title;
	req.media.subtitle 		= b.subtitle;
	req.media.description 	= b.description;
	req.media.file 			= b.file;

	req.media.save(function (err, item, numberAffected) 
	{
		// if(err) res.json(err);
		// res.json(item);

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
	File.findOne({ '_id': req.media.file[0]._id }, function (err, file) 
	{
		if (err) res.json(err);
		res.json(file);

		var file_url = req.media.file[0].url;

		file.remove(function(err) 
		{
			if(err) 
			{
				console.log('removing File document failed');
				res.json(err);
			}
			else
			{
				console.log('removed File document successfully');
				res.json('all good');

				req.media.remove(function(err) 
				{
					if(err) 
					{
						console.log('removing Media failed');
						res.json(err)
					}
					else
					{
						console.log('removed Media successfully');
						res.json('all good');
					}
				});

				// remove related file
				fs.unlink(path.join(WWW_DIR + file_url), function (err) 
				{
					if (err) throw err;
					console.log('successfully deleted /tmp/hello');
				});
			}
		});
	});
};


