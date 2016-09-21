var passport = require("passport")


module.exports = {
  // GET /signup
  getSignup: function(req, res) {
    // res.render('signup', { message: req.flash('errorMessage') });
    return res.send("Get Signup");
  },

  // POST /signup
  postSignup: function(req, res) {
    var signupStrategy = passport.authenticate('local-signup', {
      successRedirect: '/',
      failureRedirect: '/signup',
      failureFlash: true,
      // session: false // if you want to remove stored sessions
    });
    // console.log(req);
    // console.log(res);
    // console.log(passport.authenticate('local-signup',{}));
    return signupStrategy(req, res);
  },

  // GET /login
  getLogin: function(req, res) {
    // res.render('login', { message: req.flash('errorMessage') });
    return res.send('get login');
  },

  // POST /login
  postLogin: function(req, res) {
    var loginStrategy = passport.authenticate('local-login', {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true,
      // session: false // if you want to remove stored sessions
    });
    console.log( req.user )
    return loginStrategy(req, res);
  },

  // GET /logout
  getLogout: function(req, res) {
    req.logout();
    res.redirect('/');
  },

  // Restricted page
  getSecret: function(req, res){
    // res.render('secret.ejs');
    return res.send('get secret');
  },

  // Test function
  getTest: function(req, res){
    // test for req.user to have user details provided deserializeUser
    return res.json(req.user);
  }

}
