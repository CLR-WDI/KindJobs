var LocalStrategy     = require('passport-local').Strategy;
var FacebookStrategy  = require('passport-facebook').Strategy;
var LinkedInStrategy  = require('passport-linkedin-oauth2').Strategy;
var UserAuth          = require('../models/userauth.model');


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
    UserAuth.findOne({ email : email }, function(err, user) {
      if (err) return done(err);

      // If there is a user with this email
      if (user) {
        return done(null, false, req.flash('errorMessage', 'This email is already used!'));
      } else {
        var newUser             = new UserAuth();
        newUser.name            = req.body.name;
        newUser.email           = email;
        newUser.local.password  = UserAuth.encrypt(password);
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
      UserAuth.findOne({ email: email }, function(err, user) {
        if (err) return done(err);
        // If no user is found
        if (!user)
          return done(null, false, req.flash('errorMessage', 'No user found.'));

        // Check if the password is correct
        if (!user.validPassword(password))
          return done(null, false, req.flash('errorMessage', 'Oops wrong password!'));

        return done(null, user);

      });
  }));

  passport.use('facebook', new FacebookStrategy(
    {
      clientID: process.env.KINDJOBS_FACEBOOK_clientID, //process.env.FACEBOOK_ID
      clientSecret: process.env.KINDJOBS_FACEBOOK_clientSecret, //process.env.FACEBOOK_SECRET
      callbackURL: '/api/users/auth/facebook/callback',
      profileFields: ['name', 'email'], // other options include 'link', 'locale', 'timezone'
      passReqToCallback: true,
    },
    function(req, accessToken, refreshToken, profile, done) {
      if (req.user) // test to see if user is logged in
      {
        UserAuth.findOne({ facebookId: profile.id }, function(err, existingUser) {
          if (err) { return done(err); }
          if (existingUser) {
            req.flash('errors', { msg: 'There is already a Facebook account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
            done(err);
          } else {
            UserAuth.findById(req.user.id, function(err, user) {
              if (err) { return done(err); }
              user.facebookId = profile.id;
              user.name       = user.name || profile.name.givenName + ' ' + profile.name.familyName;
              user.save(
                function(err) {
                req.flash('info', { msg: 'Facebook account has been linked.' });
                done(err, user);
              });
            });
          }
        });
      } else {
        UserAuth.findOne({ facebookId: profile.id }, function(err, existingUser) {
          if (err) { return done(err); }
          if (existingUser) {
            return done(null, existingUser);
          }
          UserAuth.findOne({ email: profile._json.email }, function(err, existingEmailUser) {
            if (err) { return done(err); }
            if (existingEmailUser) {
              req.flash('errors', { msg: 'There is already an account using this email address. Sign in to that account and link it with Facebook manually from Account Settings.' });
              done(err);
            } else {
              const newUser = new UserAuth();
              newUser.email = profile._json.email;
              newUser.facebookId = profile.id;
              newUser.name       = profile.name.givenName + ' ' + profile.name.familyName;
              newUser.save(function(err, user) {
                  if (err) return done(err);
                  return done(null, user);
              });
            }
          });
        })
      }
    }
  )); // for facebook passport



  passport.use('linkedin', new LinkedInStrategy({
    clientID: process.env.KINDJOBS_LINKEDIN_clientID,
    clientSecret: process.env.KINDJOBS_LINKEDIN_clientSecret,
    callbackURL: '/api/users/auth/linkedin/callback',
    scope: ['r_basicprofile', 'r_emailaddress'],
    profileFields: ['id', 'first-name', 'last-name', 'email-address'], //'headline'
    passReqToCallback: true
  }, function(req, accessToken, refreshToken, profile, done){
    if (req.user) {
      UserAuth.findOne({ linkedinId: profile.id }, function(err, existingUser) {
        if (err) { return done(err); }
        if (existingUser) {
          req.flash('errors', { msg: 'There is already a LinkedIn account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
          done(err);
        } else {
          UserAuth.findById(req.user.id, function (err, user) {
            if (err) { return done(err); }
            user.linkedinId = profile.id;
            user.name = user.name || profile.name.givenName + ' ' + profile.name.familyName ;
            user.save(function(err) {
              if (err) { return done(err); }
              req.flash('info', { msg: 'LinkedIn account has been linked.' });
              done(err, user);
            });
          });
        }
      });
    } else {
      UserAuth.findOne({ linkedinId: profile.id }, (err, existingUser) => {
        if (err) { return done(err); }
        if (existingUser) {
          return done(null, existingUser);
        }
        UserAuth.findOne({ email: profile._json.emailAddress }, (err, existingEmailUser) => {
          if (err) { return done(err); }
          if (existingEmailUser) {
            req.flash('errors', { msg: 'There is already an account using this email address. Sign in to that account and link it with LinkedIn manually from Account Settings.' });
            done(err);
          } else {
            const newUser = new UserAuth();
            newUser.linkedinId = profile.id;
            newUser.name = profile.name.givenName + ' ' + profile.name.familyName ;
            newUser.email = profile._json.emailAddress;
            newUser.save( function(err, user){
              if (err) { return done(err); }
              return done(null, user);
            });
          }
        });
      });
    }
  }
  )); // for linkedin passport



} // for module export
