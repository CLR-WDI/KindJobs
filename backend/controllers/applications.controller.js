var Applications = require('mongoose').model('Application');

module.exports = {

  index: function(req, res, next) {
    Applications.find()
            .sort({createdAt: -1})
            .exec(function (err, application) {
              if (err) {
                res.status(400).send(err);
              };
              res.status(200).json(application)
            });
  },

  create: function(req, res, next) {
    var Application = new Applications(req.body);
    console.log(req.body);

    Application.save(function(err) {
      if (err) {
        return res.status(400).send(err);
      }
      res.status(200).json(Application);
    });

  },

	update: function(req, res, next) {
	  Applications.findByIdAndUpdate(req.params.id, req.body, function(err, application) {
	    if (err) {
	      return next(err);
	    } else {
	      res.status(200).json(application);
	    }
	  });
	},

	destroy: function(req, res, next) {
		Applications.remove({
			_id: req.params.id
		}, function(err, application){
			if (err) return next(err);
			res.status(200).json([{message: 'Application successfully deleted'}])
		})
  }

}
