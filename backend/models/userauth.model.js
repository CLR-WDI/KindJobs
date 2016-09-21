// for no-SQL database
var mongoose  = require('mongoose'),
//    Schema    = mongoose.Schema,
    // for encrypthing
    bcrypt    = require('bcrypt');

var UserAuthSchema = new mongoose.Schema({
  local : {
    email        : String,
    password     : String,
  }

});

UserAuthSchema.set('timestamps',{});

UserAuthSchema.statics.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserAuthSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model( 'UserAuth', UserAuthSchema );
