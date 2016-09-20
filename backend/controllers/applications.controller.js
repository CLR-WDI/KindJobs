var Applications = require('mongoose').model('Application');

var AWS = require('aws-sdk');

AWS.config.region = process.env.S3_REGION;

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
      getAllAppsFn(req, res, next);
    });

  },

	update: function(req, res, next) {
	  Applications.findByIdAndUpdate(req.params.id, req.body, function(err, application) {
	    if (err) {
	      return next(err);
	    } else {
	      getAllAppsFn(req, res, next);
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
  },

  sign: function(req, res, next) {
        var s3 = new AWS.S3();
        var filename = req.query.filename;
        var filetype = req.query.filetype;
        console.log("query is ", req.query);
        console.log("filename is ", filename);
        console.log("filetype is ", filetype);

        var params = {
            Bucket: process.env.S3_BUCKET,
            Key: filename,
            Expires: 60,
            ContentType: filetype,
            ACL: 'public-read'
        };

        s3.getSignedUrl('putObject', params, function(err, data) {
            if (err) return next(err);
            res.status(200).json(data);
        });
    }
}
