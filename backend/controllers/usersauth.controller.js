var passport = require("passport")


module.exports = {
  // GET /signup
  getSignup: function(req, res) {
  }

  // POST /signup
  postSignup: function(req, res) {
    var signupStrategy = passport.authenticate('local-signup', {
      successRedirect: '/',
      failureRedirect: '/signup',
      failureFlash: true
    });

    return signupStrategy(req, res);
  }

  // GET /login
  getLogin: function(req, res) {
  }

  // POST /login
  postLogin: function(req, res) {
  }

  // GET /logout
  getLogout: function(req, res) {
  }

  // Restricted page
  getSecret: function(req, res){
  }

}
