var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our model
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String,
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// User = mongoose.model('User', userSchema);

// export schema
module.exports = UserSchema = userSchema;

// create & export model
module.exports = User = mongoose.model('User', userSchema);



/// /// /// /// old model


// var UserSchema = new mongoose.Schema(
// {
// 	name: 				String,
// 	email: 				String,
// 	img_url:			String, // local, google, facebook, twitter...
// 	provider:			String, // local, google, facebook, twitter...
// 	provider_data:		Object, // local, google, facebook, twitter...
// 	// age: 				Number,
// });

// User 	= mongoose.model('User', UserSchema);

// module.exports = User = mongoose.model('User', UserSchema);