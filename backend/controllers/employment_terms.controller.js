var EmploymentTerm = require('mongoose').model('EmploymentTerm');

module.exports = {

  index: function(req, res, next) {
    EmploymentTerm.find({}, function(err, employmentTerms) {
      if (err) return next(err);
			res.status(200).json(employmentTerms);
    });
  },

  create: function(req, res, next) {
    var employmentTerm = new EmploymentTerm(req.body);
    console.log(req.body);

    employmentTerm.save(function(err) {
      if (err) return next(err);
      EmploymentTerm.find({}, function(err, employmentTerms) {
        if (err) return next(err);
  			res.status(200).json(employmentTerms);
      });
    });

  },

	update: function(req, res, next) {
	  EmploymentTerm.findByIdAndUpdate(req.params.id, req.body, function(err, employment_term) {
	    if (err) {
	      return next(err);
	    } else {
        EmploymentTerm.find({}, function(err, employmentTerms) {
          if (err) return next(err);
    			res.status(200).json(employmentTerms);
        });
	    }
	  });
	},

	destroy: function(req, res, next) {
		EmploymentTerm.remove({
			_id: req.params.id
		}, function(err, kindjob){
			if (err) return next(err);
      EmploymentTerm.find({}, function(err, employmentTerms) {
        if (err) return next(err);
  			res.status(200).json(employmentTerms);
      });
		})
  }

}
