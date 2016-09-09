var KindJobs = require('mongoose').model('KindJobs');

module.exports = {

  index: function(req, res, next) {
    KindJobs.find({}, function(err, kindjobs) {
      if (err) return next(err);
			res.status(200).json(kindjobs);
    });
  },

  create: function(req, res, next) {
    var kindJob = new KindJobs(req.body);

    kindJob.save(function(err) {
      if (err) return next(err);
      res.status(200).json(kindJob);
    });

  },

	update: function(req, res, next) {
	  KindJobs.findByIdAndUpdate(req.params.id, req.body, function(err, todo) {
	    if (err) {
	      return next(err);
	    } else {
	      res.status(200).json(todo);
	    }
	  });
	},

	destroy: function(req, res, next) {
		KindJobs.remove({
			_id: req.params.id
		}, function(err, kindjob){
			if (err) return next(err);
			res.stauts(200).json([{message: 'Job successfully deleted'}])
		})
  }

}
