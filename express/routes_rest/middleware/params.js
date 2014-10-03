
/// PARAMS middleware /// PARAMS middleware /// PARAMS middleware /// PARAMS middleware 
/// PARAMS middleware /// PARAMS middleware /// PARAMS middleware /// PARAMS middleware 
/// PARAMS middleware /// PARAMS middleware /// PARAMS middleware /// PARAMS middleware 

module.exports = function(app)
{
    app.param('userId', function(req, res, next, userId)
	{
		User.findById(userId, function (err, user)
		{
			if(err) 
			{ res.json(err) }
			else
			{
				if (user) {
				req.user = user;
				next(); }
			}
		});
	});

	app.param('fileId', function(req, res, next, fileId)
	{
		File.findById(fileId, function (err, file)
		{
			if(err) 
			{ res.json(err) }
			else
			{
				if (file) {
				req.file = file;
				next(); }
			}
		});
	});

	app.param('mediaId', function(req, res, next, mediaId)
	{
		Media.findById(mediaId, function (err, media)
		{
			if(err) 
			{ res.json(err) }
			else
			{
				if (media) {
				req.media = media;
				next(); }
			}
		});
	});

	app.param('messageKey', function(req, res, next, messageKey)
	{
		Message.findOne({key: messageKey}, function (err, message)
		{
			if(err) 
			{ res.json(err) }
			else
			{
				if (message) {
				req.message = message.content;
				next(); }
			}
		});
	});
}





/// PARAMS middleware end /// PARAMS middleware end /// PARAMS middleware end /// PARAMS middleware end 
/// PARAMS middleware end /// PARAMS middleware end /// PARAMS middleware end /// PARAMS middleware end 
/// PARAMS middleware end /// PARAMS middleware end /// PARAMS middleware end /// PARAMS middleware end 
