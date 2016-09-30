var KindJobs = require('mongoose').model('KindJob');

module.exports = {

  index: function(req, res, next) {
    var search_term1;
    var search_term2;
    var sort_criteria;

    if (req.query.no_expired === "true") {
      search_term1 = {deadline:{"$gte":Date.now()}};
      sort_criteria = {createdAt: -1};
    }else if (req.query.keyword) {
      search_term1 = {$text: { $search: req.query.keyword}};
      search_term2 = {score: {$meta: "textScore"}};
      sort_criteria = {score:{$meta:"textScore"}};
    }

    KindJobs.find(search_term1,search_term2)
            .sort(sort_criteria)
            .populate(['scope_id', 'employment_term_id', 'sector_id', 'location_id', 'sgo_id'])
            .exec(function (err,kindjob) {
              if (err) {
                res.status(400).send(err);
              };
              res.status(200).json(kindjob)
            });
  },

  create: function(req, res, next) {
    var kindJob = new KindJobs(req.body);

    kindJob.save(function(err) {
      if (err) {
        return res.status(400).send(err);
      }
      KindJobs.find()
            .sort({createdAt: -1})
            .populate(['scope_id', 'employment_term_id', 'sector_id', 'location_id', 'sgo_id'])
            .exec(function (err,kindjob) {
              if (err) {
                res.status(400).send(err);
              };
              res.status(200).json(kindjob)
            });
    });

  },

	update: function(req, res, next) {
	  KindJobs.findByIdAndUpdate(req.params.id, req.body, function(err, kindjob) {
	    if (err) {
	      return next(err);
	    } else {
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
	  });
	},

	destroy: function(req, res, next) {
		KindJobs.remove({
			_id: req.params.id
		}, function(err){
			if (err) return next(err);
      KindJobs.find()
            .sort({createdAt: -1})
            .populate(['scope_id', 'employment_term_id', 'sector_id', 'location_id', 'sgo_id'])
            .exec(function (err,kindjob) {
              if (err) {
                res.status(400).send(err);
              };
              res.status(200).json(kindjob)
            });
		})
  }

}
