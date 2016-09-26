var Sectors = require('mongoose').model('Sector');

module.exports = {

  index: function(req, res, next) {
    Sectors.find({}, function(err, sectors) {
      if (err) return next(err);
			res.status(200).json(sectors);
    });
  },

  create: function(req, res, next) {
    var sector = new Sectors(req.body);

    sector.save(function(err) {
      if (err) return next(err);
      Sectors.find({}, function(err, sectors) {
        if (err) return next(err);
  			res.status(200).json(sectors);
      });
    });

  },

	update: function(req, res, next) {
	  Sectors.findByIdAndUpdate(req.params.id, req.body, function(err, sector) {
	    if (err) {
	      return next(err);
	    } else {
        Sectors.find({}, function(err, sectors) {
          if (err) return next(err);
    			res.status(200).json(sectors);
        });
	    }
	  });
	},

	destroy: function(req, res, next) {
		Sectors.remove({
			_id: req.params.id
		}, function(err){
			if (err) return next(err);
      Sectors.find({}, function(err, sectors) {
        if (err) return next(err);
  			res.status(200).json(sectors);
      });
		})
  }

}
