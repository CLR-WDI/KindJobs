var SGOs = require('mongoose').model('SGO');

module.exports = {

  index: function(req, res, next) {
    SGOs.find({}, function(err, kindjobs) {
      if (err) return next(err);
			res.status(200).json(kindjobs);
    });
  },

  create: function(req, res, next) {
    var sector = new SGOs(req.body);
    console.log(req.body);

    sector.save(function(err) {
      if (err) return next(err);
      res.status(200).json(sector);
    });

  },

	update: function(req, res, next) {
	  SGOs.findByIdAndUpdate(req.params.id, req.body, function(err, sgo) {
	    if (err) {
	      return next(err);
	    } else {
	      res.status(200).json(sgo);
	    }
	  });
	},

	destroy: function(req, res, next) {
		SGOs.remove({
			_id: req.params.id
		}, function(err, kindjob){
			if (err) return next(err);
			res.stauts(200).json([{message: 'Job successfully deleted'}])
		})
  }

}
