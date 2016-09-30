var Locations = require('mongoose').model('Location');

module.exports = {

  index: function(req, res, next) {
    Locations.find({}, function(err, locations) {
      if (err) return next(err);
			res.status(200).json(locations);
    });
  },

  create: function(req, res, next) {
    var sector = new Locations(req.body);

    sector.save(function(err) {
      if (err) return next(err);
      Locations.find({}, function(err, locations) {
        if (err) return next(err);
  			res.status(200).json(locations);
      });
    });

  },

	update: function(req, res, next) {
	  Locations.findByIdAndUpdate(req.params.id, req.body, function(err, location) {
	    if (err) {
	      return next(err);
	    } else {
        Locations.find({}, function(err, locations) {
          if (err) return next(err);
    			res.status(200).json(locations);
        });
	    }
	  });
	},

	destroy: function(req, res, next) {
		Locations.remove({
			_id: req.params.id
		}, function(err, kindjob){
			if (err) return next(err);
      Locations.find({}, function(err, locations) {
        if (err) return next(err);
  			res.status(200).json(locations);
      });
		})
  }

}
