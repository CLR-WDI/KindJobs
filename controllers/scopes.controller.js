var Scopes = require('mongoose').model('Scope');

module.exports = {

  index: function(req, res, next) {
    Scopes.find({}, function(err, kindjobs) {
      if (err) return next(err);
			res.status(200).json(kindjobs);
    });
  },

  create: function(req, res, next) {
    var scope = new Scopes(req.body);
    console.log(req.body);

    scope.save(function(err) {
      if (err) return next(err);
      res.status(200).json(scope);
    });

  },

	update: function(req, res, next) {
	  Scopes.findByIdAndUpdate(req.params.id, req.body, function(err, scope) {
	    if (err) {
	      return next(err);
	    } else {
	      res.status(200).json(scope);
	    }
	  });
	},

	destroy: function(req, res, next) {
		Scopes.remove({
			_id: req.params.id
		}, function(err, kindjob){
			if (err) return next(err);
			res.stauts(200).json([{message: 'Job successfully deleted'}])
		})
  }

}
