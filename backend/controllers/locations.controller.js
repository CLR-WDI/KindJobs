var Locations = require('mongoose').model('Location');

module.exports = {

  index: function(req, res, next) {
    Locations.find({}, function(err, kindjobs) {
      if (err) return next(err);
			res.status(200).json(kindjobs);
    });
  },

  create: function(req, res, next) {
    var sector = new Locations(req.body);
    console.log(req.body);

    sector.save(function(err) {
      if (err) return next(err);
      res.status(200).json(sector);
    });

  },

	update: function(req, res, next) {
	  Locations.findByIdAndUpdate(req.params.id, req.body, function(err, location) {
	    if (err) {
	      return next(err);
	    } else {
	      res.status(200).json(location);
	    }
	  });
	},

	destroy: function(req, res, next) {
		Locations.remove({
			_id: req.params.id
		}, function(err, kindjob){
			if (err) return next(err);
			res.status(200).json([{message: 'Job successfully deleted'}])
		})
  }

}
