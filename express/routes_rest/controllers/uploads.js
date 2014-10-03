var crypto 			= require("crypto");
var bodyParser      = require('body-parser');
var busboy 			= require('connect-busboy');
var fs 				= require('fs');
var path 			= require('path');

// exports.path = path.dirname(process.mainModule.filename);

exports.process_one = function(req, res)
{
	console.log('log req.files: '	+ req.files);
	console.log('req.files dir:');
	console.dir(req.files);

	req.busboy.on('file', function(fieldname, file, filename, encoding, mimetype) 
	{
		// console.log('fieldname: '	+ fieldname);
		// console.log('log file:');
		// console.log(file);
		// console.dir('dir file:');
		// console.dir(file);
		// console.log('filename: '	+ filename);
		// console.log('encoding: '	+ encoding);
		// console.log('mimetype: '	+ mimetype);
		
		var re = /(?:\.([^.]+))?$/;

		var original_extension = re.exec(filename)[1];

		console.log('original_extension: '+ original_extension);

		var uniqueID = (crypto.createHash('md5').update(String(new Date()), 'utf8').digest("hex")).toString();
		console.log('uniqueID: '+ uniqueID);



		// set where the file should actually go
		var target_path = '/upload/images/' + uniqueID + '.' + original_extension;

		// var file_stream = fs.createWriteStream(__dirname + target_path);
		var file_stream = fs.createWriteStream(path.join(WWW_DIR + target_path));

		
		file_stream.on('close', function() 
		{
			var new_file = new File(
			{
				url: 					target_path,
				mimetype: 				mimetype,
				original_extension: 	original_extension,
				original_filename: 		filename,
				unique_filename: 		uniqueID + '.' + original_extension
			});

			new_file.save( function(err, file)
			{
				if(err) 
				{
					console.log("FAILED SAVING FILE");
				}
				else
				{
					if (file) 
					{
						console.dir(file);
						console.log("SUCCESS SAVING FILE");

						var new_media = new Media(
						{
							title: 	filename,
							lead: 	'',
							text: 	'',
							file: 	new_file
						});

						new_media.save( function(err, media)
						{
							if(err) 
							{
								console.log("FAILED SAVING MEDIA");
							}
							else
							{
								if (media) 
								{
									console.dir(media);
									console.log("SUCCESS SAVING MEDIA");
								};
							}
						});
					};
				}
			});
		});

		file.pipe(file_stream);

		// file.pipe(fs.createWriteStream(target_path));

		// fs.rename(filename, target_path, function(err) { 
		// 	if (err) throw err 
		// });
	});

	
	req.busboy.on('field', function(key, value, keyTruncated, valueTruncated) {
		// ...
	});

	req.busboy.on('end', function() {
        console.log('Done parsing form!');
        res.send(200, 'OK');
    });
	
	req.busboy.on('finish', function() {
      	res.writeHead(200, { 'Connection': 'close' });
  		res.end("That's all folks! 2222 ");
    });

	req.pipe(req.busboy);
};



/// FILE UPLOAD end /// FILE UPLOAD end /// FILE UPLOAD end /// FILE UPLOAD end /// FILE UPLOAD end 
/// FILE UPLOAD end /// FILE UPLOAD end /// FILE UPLOAD end /// FILE UPLOAD end /// FILE UPLOAD end 
/// FILE UPLOAD end /// FILE UPLOAD end /// FILE UPLOAD end /// FILE UPLOAD end /// FILE UPLOAD end 
