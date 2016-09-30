var Scopes = require('mongoose').model('Scope');

module.exports = {

  index: function(req, res, next) {
    Scopes.find({}, function(err, scopes) {
      if (err) return next(err);
			res.status(200).json(scopes);
    });
  },

  create: function(req, res, next) {
    var scope = new Scopes(req.body);

    scope.save(function(err) {
      if (err) return next(err);
      Scopes.find({}, function(err, scopes) {
        if (err) return next(err);
  			res.status(200).json(scopes);
      });
    });

  },

	update: function(req, res, next) {
	  Scopes.findByIdAndUpdate(req.params.id, req.body, function(err, scope) {
	    if (err) {
	      return next(err);
	    } else {
        Scopes.find({}, function(err, scopes) {
          if (err) return next(err);
    			res.status(200).json(scopes);
        });
	    }
	  });
	},

	destroy: function(req, res, next) {
		Scopes.remove({
			_id: req.params.id
		}, function(err, kindjob){
			if (err) return next(err);
      Scopes.find({}, function(err, scopes) {
        if (err) return next(err);
  			res.status(200).json(scopes);
      });
		})
  }

}
