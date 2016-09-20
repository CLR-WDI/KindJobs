// for no-SQL database
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema,
    // for encrypthing
    bcrypt    = require('bcrypt');

var UserAuthSchema = new mongoose.Schema({
  local : {
    email        : String,
    password     : String,
  }
});

KindJobSchema.set('timestamps',{});

UserAuth.statics.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

mongoose.model( 'UserAuth', UserAuthSchema );
