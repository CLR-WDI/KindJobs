var KindJobs = require('mongoose').model('KindJob');

module.exports = {

  index: function(req, res, next) {
    if (req.query.no_expired === "true") {
      currentdate = Date.now();
      KindJobs.find({deadline:{"$gte":currentdate}})
              .sort({createdAt: -1})
              .populate(['scope_id', 'employment_term_id', 'sector_id', 'location_id', 'sgo_id'])
              .exec(function (err,kindjob) {
                if (err) {
                  res.status(400).send(err);
                };
                res.status(200).json(kindjob)
              });
    }else if (req.query.keyword) {
      console.log("searching");
      KindJobs.find(
                {$text: { $search: req.query.keyword}},
                {score: {$meta: "textScore"}}
              )
              .sort({score:{$meta:"textScore"}})
              .populate(['scope_id', 'employment_term_id', 'sector_id', 'location_id', 'sgo_id'])
              .exec(function (err,kindjob) {
                if (err) {
                  res.status(400).send(err);
                };
                res.status(200).json(kindjob)
              });
    }
    else{
      console.log("normal view");
      KindJobs.find()
              .sort({createdAt: -1})
              .populate(['scope_id', 'employment_term_id', 'sector_id', 'location_id', 'sgo_id'])
              .exec(function (err,kindjob) {
                if (err) {
                  res.status(400).send(err);
                };
                res.status(200).json(kindjob)
              });
    }

  },

  create: function(req, res, next) {
    var kindJob = new KindJobs(req.body);
    console.log(req.body);

    kindJob.save(function(err) {
      if (err) {
        return res.status(400).send(err);
      }
      res.status(200).json(kindJob);
    });

  },

	update: function(req, res, next) {
	  KindJobs.findByIdAndUpdate(req.params.id, req.body, function(err, kindjob) {
	    if (err) {
	      return next(err);
	    } else {
	      res.status(200).json(kindjob);
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
