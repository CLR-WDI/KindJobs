const passport          = require("passport");
var   UserAuth          = require('../models/userauth.model');

module.exports = {
  // NON PASSPORT FUNCTIONS
  index: function(req, res, next) {
    UserAuth.find({}, function(err, users) {
      if (err) return next(err);
      res.status(200).json(users);
    });
  },

  update: function(req, res, next) {
    // update user fields
	  UserAuth.findByIdAndUpdate(req.params.id, req.body, function(err) {
	    if (err) { return next(err);}
      // update all users for the store
      UserAuth.find({}, function(err, Users) {
        if (err) return next(err);
  			res.status(200).json(Users);
      });
	  });
  },

	destroy: function(req, res, next) {
		UserAuth.remove({
			_id: req.params.id
		}, function(err){
			if (err) return next(err);
      UserAuth.find({}, function(err, Users) {
        if (err) return next(err);
  			res.status(200).json(Users);
      });
		})
  },

  // USER EDITS ON OWN DETAILS
  // get details of logged in user from middleware
  getMe: function(req, res, next){
    res.status(200).json(req.user);
  },

  // edit details of logged in user
  editMe: function(req, res, next){
    if(req.user.userType !== "Admin"){
      req.body.userType = req.user.userType;
    }
    UserAuth.findByIdAndUpdate(req.user.id, req.body, function(err) {
	    if (err) { return next(err);}
      UserAuth.findById(req.user.id , function(err, User) {
        if (err) return next(err);
        res.status(200).json(User);
      });
    });
  },

  // delete details of logged in user
  destroyMe: function(req, res, next){
    UserAuth.remove({
			_id: req.user.id
		}, function(err){
			if (err) return next(err);
      req.logout();
      res.redirect('/#');
		})
  },

  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //PASSPORT FUNCTIONS
  // logout
  getLogout: function(req, res) {
    req.logout();
    res.redirect('/#');
  },

  // LOCAL STRATEGIES
  // POST /signup
  postSignup: function(req, res) {
    var signupStrategy = passport.authenticate('local-signup', {
      successRedirect: '/#',
      failureRedirect: '/#/signup',
      failureFlash: true,
      // session: false // if you want to remove stored sessions
    });
    return signupStrategy(req, res);
  },

  // POST /login
  postLogin: function(req, res) {
    var loginStrategy = passport.authenticate('local-login', {
      successRedirect: '/#',
      failureRedirect: '/#/login',
      failureFlash: true,
      // session: false // if you want to remove stored sessions
    });
    return loginStrategy(req, res);
  },

  // FACEBOOK
  getFacebook: function(req,res){
    var facebookSendoff = passport.authenticate('facebook', { scope: ['email', 'user_location'] });
    return facebookSendoff(req,res);
  },
  // Facebook will redirect the user to this URL after approval.  Finish the
	// authentication process by attempting to obtain an access token.  If
	// access was granted, the user will be logged in.  Otherwise,
	// authentication has failed.
  getFacebookCallback: function(req,res){
    res.testMe = { userType: "Admin" };
    var facebookCallback = passport.authenticate('facebook', {
      successRedirect: '/#',
      failureRedirect: '/#/login',
      failureFlash: true, });
    return facebookCallback(req,res);
  },

  // LINKED IN
  getLinkedin: function(req, res){
    var linkedinSendoff = passport.authenticate('linkedin', { state: 'SOME STATE' });
    return linkedinSendoff(req,res);
  },
  getLinkedinCallback: function(req, res){
    var linkedinCallback = passport.authenticate('linkedin', {
      successRedirect: '/#',
      failureRedirect: '/#/login',
      failureFlash: true, });
    return linkedinCallback(req, res);
  },

}
