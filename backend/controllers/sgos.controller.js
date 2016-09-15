var SGOs = require('mongoose').model('SGO');

module.exports = {

  index: function(req, res, next) {
    SGOs.find({}, function(err, SGOs) {
      if (err) return next(err);
			res.status(200).json(SGOs);
    });
  },

  create: function(req, res, next) {
    var sgo = new SGOs(req.body);
    console.log(req.body);

    sgo.save(function(err) {
      if (err) return next(err);
      SGOs.find({}, function(err, SGOs) {
        if (err) return next(err);
  			res.status(200).json(SGOs);
      });
    });

  },

	update: function(req, res, next) {
	  SGOs.findByIdAndUpdate(req.params.id, req.body, function(err, sgo) {
	    if (err) {
	      return next(err);
	    } else {
        SGOs.find({}, function(err, SGOs) {
          if (err) return next(err);
    			res.status(200).json(SGOs);
        });
	    }
	  });
	},

	destroy: function(req, res, next) {
		SGOs.remove({
			_id: req.params.id
		}, function(err, kindjob){
			if (err) return next(err);
      SGOs.find({}, function(err, SGOs) {
        if (err) return next(err);
  			res.status(200).json(SGOs);
      });
		})
  }

}
