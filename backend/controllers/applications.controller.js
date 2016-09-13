var Applications = require('mongoose').model('Application');

var getAllAppsFn = function(req, res, next) {
          Applications.find()
          .sort({createdAt: -1})
          .populate('kindjobs_id')
          .exec(function (err, docs) {
            if (err) {
              res.status(400).send(err);
            };
            Applications.populate(docs, {
              path: 'kindjobs_id.sgo_id',
              model: 'SGO'
            }, function(err, application){
              if (err) {
                res.status(400).send(err);
              };
              res.status(200).json(application);
            })
          });
}


module.exports = {

  index: getAllAppsFn,

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
      getAllAppsFn(req, res, next);
		})
  }
}
