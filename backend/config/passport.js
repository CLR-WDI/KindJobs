var LocalStrategy   = require('passport-local').Strategy;
var UserAuth        = require('../models/userauth');

module.exports  = function(passport){
  passport.use('login-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: 'true'
  }, function(req, email, password, done){
    // Find a user with this email
    UserAuth.findOne({ 'local.email' : email }, function(err, user) {
      if (err) return done(err);

      // If there is a user with this email
      if (user) {
        return done(null, false, req.flash('errorMessage', 'This email is already used!'));
      } else {

        var newUser            = new UserAuth();
        newUser.local.email    = email;
        newUser.local.password = User.encrypt(password);

        newUser.save(function(err, user) {
          if (err) return done(err);
          return done(null, user);
        });
      }
    });
  }))
}

module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
