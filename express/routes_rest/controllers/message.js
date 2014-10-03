
/*
 * GET listing
 */

exports.list = function(req, res)
{
	Message.find({}, function(err, docs)
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
	res.json(req.message);
};


/*
 * POST new
 */

exports.create = function(req, res)
{
	console.log('create');

	var b = req.body;

	Message.count({}, function( err, count)
	{
	    console.log( "Number of messages:", count );

	    var number_to_use = (1111111 + count).toString(32);

	    console.log('number_to_use: '+ number_to_use);
	    console.log('req.user: '	 + req.user);

	    var new_msg 	= new Message();
		new_msg.key		= String(number_to_use);
		new_msg.content	= b.content;

		if (req.user != undefined)
	    {
	    	new_msg.sender = req.user._id;
	    };

		new_msg.save( function(err, message)
		{
			// if(err) res.json(err);
			// if(message) {
			// 	console.dir(message);
			// 	res.json(message);
			// }

			if(err) 
			{
				res.json(err)
			}
			else
			{
				if (message) 
				{
					console.dir(message);
					res.json(message);
					// res.redirect('/' + number_to_use)
				};
			}
		});
	});

	
};


/*
 * PUT single
 */

exports.update = function(req, res)
{
	console.log('update');

	var b = req.body;

	req.message.name 	= b.name;

	req.message.save(function (err, item, numberAffected) 
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
	req.message.remove(function(err) 
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
};