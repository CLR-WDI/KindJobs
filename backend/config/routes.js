module.exports = function(app) {

	var kindJobsController = require('../controllers/kind_jobs.controller');
	var scopesController = require('../controllers/scopes.controller');
	var employmentTermsController = require('../controllers/employment_terms.controller');
	var sectorsController = require('../controllers/sectors.controller');
	var locationsController = require('../controllers/locations.controller');
	var sgosController = require('../controllers/sgos.controller');
	var applicationsController = require('../controllers/applications.controller');
	var usersController = require('../controllers/users.controller');

	// for passport
	var passport          = require("passport");
	var usersAuthController = require('../controllers/usersauth.controller');

	// authenticate by passport
	function authenticatedUser(req, res, next) {
	  // If the user is authenticated, then we continue the execution
	  if (req.isAuthenticated()) return next();

	  // Otherwise the request is always redirected to the home page
	  req.flash('errorMessage', 'Login to access!');
	  res.redirect('/loginAuth');
	}

	function unAuthenticatedUser(req, res, next) {
	  if(!req.isAuthenticated()) return next();
	  req.flash('errorMessage', 'You are already logged in!')
	  res.redirect('/');
	}



	// add routes before JWT FOR TESTING PURPOSES
	app.route('/signupAuth')
	  .get(usersAuthController.getSignup) //unAuthenticatedUser,
	  .post(usersAuthController.postSignup)

	app.route('/loginAuth')
	  .get(usersAuthController.getLogin) //unAuthenticatedUser,
	  .post(usersAuthController.postLogin)

	app.route("/logoutAuth")
	  .get(authenticatedUser, usersAuthController.getLogout);

	app.route("/testAuth")
		.get(authenticatedUser, usersAuthController.getTest)
	// app.route("/secret")
	// 		.get(authenticatedUser, usersController.getSecret)
	//
	//




	// tokens for managing access
	var expressJWT = require('express-jwt');
	var jwt_secret = "1kindjobsarenotjustforkindpeople2takeakindjobandlearntobeakinderkindofhuman";

	// JWT access control. Important to have these before our routes, so it can run first!
	// ACCESS RESTRICTIONS FOR
	app.use( expressJWT({
		secret: jwt_secret,
		// isRevoked: blacklist.isRevoked  // install to revoke access of offending individuals
	})
 			.unless({
				path:	[
					'/images',
					'/api/users/signup', // route unblocked till we look for admin users
					'/api/users/login',
					{url: '/api/kindjobs',
					methods: ['GET']},
					{url: '/api/scopes',
					methods: ['GET']},
					{url: '/api/employment_terms',
					methods: ['GET']},
					{url: '/api/sectors',
					methods: ['GET']},
					{url: '/api/locations',
					methods: ['GET']},
					{url: '/api/sgos',
					methods: ['GET']},
					{url: '/api/applications',
					methods: ['POST']}, // note method will not block the GET method
				]
			})
		);

	app.use(function (error, request, response, next) {
	  if (error.name === 'UnauthorizedError') {
	    response.status(401).json({message: 'You need to log in to view this information.'});
	  }
	});


	app.post('/api/users/signup', usersController.signup)
	app.post('/api/users/login',	usersController.login)
	app.get('/api/users', usersController.index)

	app.route('/api/users/:id')
		.put(usersController.update)
		.delete(usersController.destroy)

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

 };
