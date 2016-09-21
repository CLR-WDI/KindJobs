var LocalStrategy   = require('passport-local').Strategy;
var UserAuth        = require('../models/userauth.model');

module.exports  = function(passport){
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    UserAuth.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  }, function(req, email, password, done){
    // the done function is a verify callback
      // first argument: err if it's server error e.g. done(err) or null if it's another kind of error (e.g. authentication)
      // second argument: falsey is an authentication failure e.g. done(null, false);, or truthy with user e.g. done(null, user);
      // third argument: custom error messages e.g.  done(null, false, { message: 'Incorrect password.' });

    // Find a user with this email
    UserAuth.findOne({ 'local.email' : email }, function(err, user) {
      if (err) return done(err);

      // If there is a user with this email
      if (user) {
        return done(null, false, req.flash('errorMessage', 'This email is already used!'));
      } else {

        var newUser            = new UserAuth();
        newUser.local.email    = email;
        newUser.local.password = UserAuth.encrypt(password);

        newUser.save(function(err, user) {
          if (err) return done(err);
          return done(null, user);
        });
      }
    });
  }))

  passport.use('local-login', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    }, function(req, email, password, done){
      // Search for a use with this email
      UserAuth.findOne({ 'local.email': email }, function(err, user) {
        if (err) return done(err);
        // If no user is found
        if (!user) return done(null, false, req.flash('errorMessage', 'No user found.'));

        // Check if the password is correct
        if (!user.validPassword(password)) return done(null, false, req.flash('errorMessage', 'Oops wrong password!'));

        return done(null, user);

      });
    }));
}
