var EmploymentTerm = require('mongoose').model('EmploymentTerm');

module.exports = {

  index: function(req, res, next) {
    EmploymentTerm.find({}, function(err, kindjobs) {
      if (err) return next(err);
			res.status(200).json(kindjobs);
    });
  },

  create: function(req, res, next) {
    var employmentTerm = new EmploymentTerm(req.body);
    console.log(req.body);

    employmentTerm.save(function(err) {
      if (err) return next(err);
      res.status(200).json(employmentTerm);
    });

  },

	update: function(req, res, next) {
	  EmploymentTerm.findByIdAndUpdate(req.params.id, req.body, function(err, employment_term) {
	    if (err) {
	      return next(err);
	    } else {
	      res.status(200).json(employment_term);
	    }
	  });
	},

	destroy: function(req, res, next) {
		EmploymentTerm.remove({
			_id: req.params.id
		}, function(err, kindjob){
			if (err) return next(err);
			res.stauts(200).json([{message: 'Job successfully deleted'}])
		})
  }

}
