const passport          = require("passport");
var   UserAuth          = require('../models/userauth.model');

module.exports = {
  // NON PASSPORT FUNCTIONS
  index: function(req, res, next) {
    // must login to access api call
    if(!req.user) return res.status(401).json({message: 'Log in to view.'});
    // only admin may view all users
    if(req.user.userType === "Admin"){
      UserAuth.find({}, function(err, users) {
        if (err) return next(err);
        res.status(200).json(users);
      });
    }else{
      res.status(401).json({message: 'Only special users may view this information.'});
    }

  },

  update: function(req, res, next) {
    // must login to access api call
    if(!req.user) return res.status(401).json({message: 'Log in to edit.'});
    // only admin or the user themselves may edit this
    if(req.user.userType === "Admin" || req.user.id === req.params.id){
      // if not the admin, the usertype is reset to the value stored in the database
      if(req.user.userType !== "Admin"){ req.body.userType = req.user.userType}
      // all other fields may be updated
  	  UserAuth.findByIdAndUpdate(req.params.id, req.body, function(err) {
  	    if (err) {
  	      return next(err);
  	    } else {
          if(req.user.userType === "Admin"){
            // update all users for the store
            UserAuth.find({}, function(err, Users) {
              if (err) return next(err);
        			res.status(200).json(Users);
            });
          }else{
            UserAuth.find({ id: req.user.id }, function(err, Users) {
              if (err) return next(err);
        			res.status(200).json(Users);
            });
          }
  	    }
  	  });
    }else{
      res.status(401).json({message: 'Only special users may update this information.'});
    }
  },

	destroy: function(req, res, next) {
    // must login to access api call
    if(!req.user) return res.status(401).json({message: 'Log in to delete.'});
    // only admin or the user themselves may delete this profile
    if(req.user.userType === "Admin" || req.user.id === req.params.id){
  		UserAuth.remove({
  			_id: req.params.id
  		}, function(err){
  			if (err) return next(err);
        UserAuth.find({}, function(err, Users) {
          if(req.user.userType === "Admin"){
            // update all users for the store
            UserAuth.find({}, function(err, Users) {
              if (err) return next(err);
        			res.status(200).json(Users);
            });
          }else{
            UserAuth.find({ id: req.user.id }, function(err, Users) {
              if (err) return next(err);
        			res.status(200).json(Users);
            });
          }
        });
  		})
    }else{
      res.status(401).json({message: 'Only special users may view this information.'});
    }
  },

  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //PASSPORT FUNCTIONS
  // logout
  getLogout: function(req, res) {
    req.logout();
    res.redirect('/');
  },

  // LOCAL STRATEGIES
  // POST /signup
  postSignup: function(req, res) {
    var signupStrategy = passport.authenticate('local-signup', {
      successRedirect: '/',
      failureRedirect: '/#/signup',
      failureFlash: true,
      // session: false // if you want to remove stored sessions
    });
    return signupStrategy(req, res);
  },

  // POST /login
  postLogin: function(req, res) {
    var loginStrategy = passport.authenticate('local-login', {
      successRedirect: '/',
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
