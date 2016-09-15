var User = require('mongoose').model('User');
// jwt token to encrypt a security token for server cookie
var jwt = require('jsonwebtoken');
// secret for jwt tokens
var secret = "1kindjobsarenotjustforkindpeople2takeakindjobandlearntobeakinderkindofhuman";

module.exports = {

  index: function(req, res, next) {
    User.find({}, function(err, User) {
      if (err) return next(err);
			res.status(200).json(User);
    });
  },

  signup: function(req, res, next) {
    var user = new User(req.body);
    console.log(req.body);

    user.save(function(err) {
      if (err) return next(err);
      // include the body of information sent in the jwt
      var myInfo = {
        _id: user._id,
        name: user.name,
        admin: user.admin
      };
      // make token & send as JSON
      var jwtToken = jwt.sign(myInfo, secret);
      return res.status(200).json({ admin: myInfo.admin, message: "Signed up !", jwtToken: jwtToken});
    });
  },

  login: function(req, res, next) {
    var userParams = new User(req.body);
    User.findOne({ email: userParams.email }, function(err, user){
      user.authenticate( userParams.password, function(err, isMatch){
        if (err) throw err;
        if (isMatch) {
          // include the body of information sent in the jwt
          var myInfo = {
            _id: user._id,
            name: user.name,
            admin: user.admin
          };
          // make token & send as JSON
          var jwtToken = jwt.sign(myInfo, secret);
          return res.status(200).json({ message: "Valid Credentials !", admin: myInfo.admin, jwtToken: jwtToken});
        } else {
          return res.status(401).send({ message: "No match of email and password found", jwtToken: ""});
        }
      })
    })
  },

	update: function(req, res, next) {
	  User.findByIdAndUpdate(req.params.id, req.body, function(err, sgo) {
	    if (err) {
	      return next(err);
	    } else {
        User.find({}, function(err, User) {
          if (err) return next(err);
    			res.status(200).json(User);
        });
	    }
	  });
	},

	destroy: function(req, res, next) {
		User.remove({
			_id: req.params.id
		}, function(err, kindjob){
			if (err) return next(err);
      User.find({}, function(err, User) {
        if (err) return next(err);
  			res.status(200).json(User);
      });
		})
  }

}
