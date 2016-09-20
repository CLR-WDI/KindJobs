// for no-SQL database
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema,
    // for encrypthing
    bcrypt    = require('bcrypt');

var UserSchema = new mongoose.Schema({
  name: { type: String },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email address']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    validate: [
      function (password) {
        return password.length >= 6;
      },
      'Password must be at least 6 characters'
    ]
   },
  admin: {
    type: Boolean,
    required: true,
    default: false
  }
});

KindJobSchema.set('timestamps',{});

UserSchema.methods.authenticate = function(password, callback){
  // compare is a bcrypt method that returns a boolean,
  // if the first argument once encrypted corresponds to the second arguement
  bcrypt.compare(password, this.password, function(err, isMatch){
    callback( null, isMatch );
  });
}


UserSchema.pre('save', function(next){
  var user = this;

  // only has the password if it has been modified (or is new)
  if( !user.isModified('password')) return next();

  // generate a salt with a factor of 10
  bcrypt.genSalt(5, function(err, salt){
    if (err) return next(err);

    // Hash password using new salt
    bcrypt.hash(user.password, salt, function(err, hash){
      if(err) return next(err);

      // Override the cleartext password with the hashed one
      user.password = hash;
      next();
    })
  })
});


mongoose.model( 'User', UserSchema );
