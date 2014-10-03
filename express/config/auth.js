// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: 'your-secret-clientID-here', // your App ID
		'clientSecret' 	: 'your-client-secret-here', // your App Secret
		'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'your-consumer-key-here',
		'consumerSecret' 	: 'your-client-secret-here',
		'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '1028963664591-5a0glbp2jtir1ifhkrnlh7qcvm7jg8vm.apps.googleusercontent.com',
		'clientSecret' 	: 'hBetdnbUIc12a9-mX_4KAfSh',
		'callbackURL' 	: 'http://127.0.0.1:3000/auth/google/callback'
		//'callbackURL' 	: 'http://exresearch.jit.su/auth/google/callback'
	}


};