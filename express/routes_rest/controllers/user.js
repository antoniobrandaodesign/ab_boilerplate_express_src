
/*
 * GET listing
 */

exports.list = function(req, res)
{
	User.find({}, function(err, docs)
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
	res.json(req.user);
};


/*
 * POST new
 */

exports.create = function(req, res)
{
	var b = req.body;

	new User(
	{
		name: b.name,
		email: b.email,
		provider: 'local'//,
		// age: b.age

	}).save( function(err, user)
	{
		// if(err) res.json(err);
		// res.json(user);

		if(err) 
		{
			res.json(err)
		}
		else
		{
			if (user) 
			{
				res.json(user);
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

	req.user.name 	= b.name;
	req.user.email 	= b.email;
	// req.user.age 	= b.age;

	req.user.save(function (err, item, numberAffected) 
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
	req.user.remove(function(err) 
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




// google user data

// { provider: 'google',
//   id: '107649976829534798281',
//   displayName: 'Antonio Brandao',
//   name: { familyName: 'Brandao', givenName: 'Antonio' },
//   emails: [ { value: 'antoniobrandaodesign@gmail.com' } ],
//   _raw: '{\n "id": "107649976829534798281",\n "email": "antoniobrandaodesign@gmail.com",\n "verified_email": true,\n "name": "Antonio Brandao",\n "given_name": "Antonio",\n "family_name": "Brandao",\n "link": "https://plus.google.com/107649976829534798281",\n "picture": "https://lh6.googleusercontent.com/-WFLJZXJiKWo/AAAAAAAAAAI/AAAAAAAAADQ/tbK_8Mt2Sa8/photo.jpg",\n "gender": "male",\n "locale": "en"\n}\n',
//   _json: 
//    { id: '107649976829534798281',
//      email: 'antoniobrandaodesign@gmail.com',
//      verified_email: true,
//      name: 'Antonio Brandao',
//      given_name: 'Antonio',
//      family_name: 'Brandao',
//      link: 'https://plus.google.com/107649976829534798281',
//      picture: 'https://lh6.googleusercontent.com/-WFLJZXJiKWo/AAAAAAAAAAI/AAAAAAAAADQ/tbK_8Mt2Sa8/photo.jpg',
//      gender: 'male',
//      locale: 'en' } }


