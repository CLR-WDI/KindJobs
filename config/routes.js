module.exports = function(app) {

	var kindJobsController = require('../controllers/kind_jobs.controller');

	/*	We can find solid documentation on routing here
			https://expressjs.com/en/guide/routing.html
																											*/
	app.route('/kindjobs')
		.get(kindJobsController.index)

	app.route('/kindjobs')
		.post(kindJobsController.create)

	 app.route('/kindjobs/:id')
	 	.put(kindJobsController.update)
	 	.delete(kindJobsController.destroy)
 };
