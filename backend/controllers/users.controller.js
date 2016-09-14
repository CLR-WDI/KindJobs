var User = require('mongoose').model('User');

module.exports = {

  // index: function(req, res, next) {
  //   User.find({}, function(err, User) {
  //     if (err) return next(err);
	// 		res.status(200).json(User);
  //   });
  // },

  signup: function(req, res, next) {
    var user = new User(req.body);
    console.log(req.body);

    user.save(function(err) {
      if (err) return next(err);
      User.find({}, function(err, User) {
        if (err) return next(err);
  			res.status(200).json(User);
      });
    });
  },

  login: function(req, res, next) {
    var userParams = new User(req.body);

    User.findOne({ email: userParams.email }, function(err, user){
      user.authenticate( userParams.password, function(err, isMatch){
        if (err) throw err;
        if (isMatch) {
          return res.status(200).send({ message: "Valid Credentials !"});
        } else {
          return res.status(401).send({ message: "No match of email and password found"});
        }
      })
    })
  },

	// update: function(req, res, next) {
	//   User.findByIdAndUpdate(req.params.id, req.body, function(err, sgo) {
	//     if (err) {
	//       return next(err);
	//     } else {
  //       User.find({}, function(err, User) {
  //         if (err) return next(err);
  //   			res.status(200).json(User);
  //       });
	//     }
	//   });
	// },
  //
	// destroy: function(req, res, next) {
	// 	User.remove({
	// 		_id: req.params.id
	// 	}, function(err, kindjob){
	// 		if (err) return next(err);
  //     User.find({}, function(err, User) {
  //       if (err) return next(err);
  // 			res.status(200).json(User);
  //     });
	// 	})
  // }

}
