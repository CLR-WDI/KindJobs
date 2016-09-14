module.exports = function(app) {

	var kindJobsController = require('../controllers/kind_jobs.controller');
	var scopesController = require('../controllers/scopes.controller');
	var employmentTermsController = require('../controllers/employment_terms.controller');
	var sectorsController = require('../controllers/sectors.controller');
	var locationsController = require('../controllers/locations.controller');
	var sgosController = require('../controllers/sgos.controller');
	var applicationsController = require('../controllers/applications.controller');
	var usersController = require('../controllers/users.controller');

	app.route('/api/kindjobs')
		.get(kindJobsController.index)
		.post(kindJobsController.create)

	app.route('/api/kindjobs/:id')
	 	.put(kindJobsController.update)
	 	.delete(kindJobsController.destroy)

	app.route('/api/scopes')
		.get(scopesController.index)
		.post(scopesController.create)

	app.route('/api/scopes/:id')
	 	.put(scopesController.update)
	 	.delete(scopesController.destroy)

	app.route('/api/employment_terms')
		.get(employmentTermsController.index)
		.post(employmentTermsController.create)

	app.route('/api/employment_terms/:id')
		.put(employmentTermsController.update)
		.delete(employmentTermsController.destroy)

	app.route('/api/sectors')
		.get(sectorsController.index)
		.post(sectorsController.create)

	app.route('/api/sectors/:id')
		.put(sectorsController.update)
		.delete(sectorsController.destroy)

	app.route('/api/locations')
		.get(locationsController.index)
		.post(locationsController.create)

	app.route('/api/locations/:id')
		.put(locationsController.update)
		.delete(locationsController.destroy)

	app.route('/api/sgos')
		.get(sgosController.index)
		.post(sgosController.create)

	app.route('/api/sgos/:id')
		.put(sgosController.update)
		.delete(sgosController.destroy)

	app.route('/api/applications')
		.get(applicationsController.index)
		.post(applicationsController.create)

	app.route('/api/applications/:id')
		.put(applicationsController.update)
		.delete(applicationsController.destroy)

	app.post('/api/users/signup', usersController.signup)
	app.post('/api/users/login',	usersController.login)
	// app.get('/api/users', usersController.index)
	//
	//
	// app.route('/api/users/:id')
	// 	.put(usersController.update)
	// 	.delete(usersController.destroy)

 };
