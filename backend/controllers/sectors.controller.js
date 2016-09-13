var Sectors = require('mongoose').model('Sector');

module.exports = {

  index: function(req, res, next) {
    Sectors.find({}, function(err, kindjobs) {
      if (err) return next(err);
			res.status(200).json(kindjobs);
    });
  },

  create: function(req, res, next) {
    var sector = new Sectors(req.body);
    console.log(req.body);

    sector.save(function(err) {
      if (err) return next(err);
      res.status(200).json(sector);
    });

  },

	update: function(req, res, next) {
	  Sectors.findByIdAndUpdate(req.params.id, req.body, function(err, sector) {
	    if (err) {
	      return next(err);
	    } else {
	      res.status(200).json(sector);
	    }
	  });
	},

	destroy: function(req, res, next) {
		Sectors.remove({
			_id: req.params.id
		}, function(err, kindjob){
			if (err) return next(err);
			res.status(200).json([{message: 'Job successfully deleted'}])
		})
  }

}
