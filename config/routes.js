module.exports = function(app) {

	var kindJobsController = require('../controllers/kind_jobs.controller');
	var scopesController = require('../controllers/scopes.controller');
	var employmentTermsController = require('../controllers/employment_terms.controller');
	var sectorsController = require('../controllers/sectors.controller');
	var locationsController = require('../controllers/locations.controller');
	var sgosController = require('../controllers/sgos.controller');

	app.route('/kindjobs')
		.get(kindJobsController.index)
		.post(kindJobsController.create)

	app.route('/kindjobs/:id')
	 	.put(kindJobsController.update)
	 	.delete(kindJobsController.destroy)

	app.route('/scopes')
		.get(scopesController.index)
		.post(scopesController.create)

	app.route('/scopes/:id')
	 	.put(scopesController.update)
	 	.delete(scopesController.destroy)

	app.route('/employment_terms')
		.get(employmentTermsController.index)
		.post(employmentTermsController.create)

	app.route('/employment_terms/:id')
		.put(employmentTermsController.update)
		.delete(employmentTermsController.destroy)

	app.route('/sectors')
		.get(sectorsController.index)
		.post(sectorsController.create)

	app.route('/sectors/:id')
		.put(sectorsController.update)
		.delete(sectorsController.destroy)

	app.route('/locations')
		.get(locationsController.index)
		.post(locationsController.create)

	app.route('/locations/:id')
		.put(locationsController.update)
		.delete(locationsController.destroy)

	app.route('/sgos')
		.get(sgosController.index)
		.post(sgosController.create)

	app.route('/sgos/:id')
		.put(sgosController.update)
		.delete(sgosController.destroy)

 };
