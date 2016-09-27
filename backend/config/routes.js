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
	  res.status(401).json({message: 'You need to log in to view this information.'});
	  res.redirect('/');
	}

	function unAuthenticatedUser(req, res, next) {
	  if(!req.isAuthenticated()) return next();
	  req.flash('errorMessage', 'You are already logged in!')
	  res.redirect('/');
	}

	function checkIfAdmin(req, res, next) {
	  // If the user is authenticated, then we continue the execution
	  if (req.user.userType === "Admin") return next();
	  // Otherwise the request is always redirected to the home page
	  res.status(401).json({message: 'Access limited to Special Users'});
	  res.redirect('/');
	}


	// User authentication routes
	app.route('/api/users/signupAuth')
	  .post(usersAuthController.postSignup)

	app.route('/api/users/loginAuth')
	  .post(usersAuthController.postLogin)

	app.route("/api/users/logoutAuth")
	  .get(authenticatedUser, usersAuthController.getLogout);

	// Redirect the user to Facebook for authentication.  When complete,
	// Facebook will redirect the user back to the application at
	//     /auth/facebook/callback
	app.get('/api/users/auth/facebook', usersAuthController.getFacebook);
	app.get('/api/users/auth/facebook/callback', usersAuthController.getFacebookCallback); // usersAuthController.getFacebookCallbackSuccess

	app.get('/api/users/auth/linkedin', usersAuthController.getLinkedin);
  app.get('/api/users/auth/linkedin/callback', usersAuthController.getLinkedinCallback); // usersAuthController.getLinkedinCallbackSuccess

	// // tokens for managing access
	// var expressJWT = require('express-jwt');
	// var jwt_secret = "1kindjobsarenotjustforkindpeople2takeakindjobandlearntobeakinderkindofhuman";

	// JWT access control. Important to have these before our routes, so it can run first!
	// ACCESS RESTRICTIONS FOR

	// app.use( expressJWT({
	// 	secret: jwt_secret,
	// 	// isRevoked: blacklist.isRevoked  // install to revoke access of offending individuals
	// })
 // 			.unless({
	// 			path:	[
	// 				'/images',
	// 				'/api/users/signup', // route unblocked till we look for admin users
	// 				'/api/users/login',
	// 				{url: '/api/kindjobs',
	// 				methods: ['GET']},
	// 				{url: '/api/scopes',
	// 				methods: ['GET']},
	// 				{url: '/api/employment_terms',
	// 				methods: ['GET']},
	// 				{url: '/api/sectors',
	// 				methods: ['GET']},
	// 				{url: '/api/locations',
	// 				methods: ['GET']},
	// 				{url: '/api/sgos',
	// 				methods: ['GET']},
	// 				{url: '/api/applications',
	// 				methods: ['POST']}, // note method will not block the GET method
	// 			]
	// 		})
	// 	);

	// app.use(function (error, request, response, next) {
	//   if (error.name === 'UnauthorizedError') {
	//     response.status(401).json({message: 'You need to log in to view this information.'});
	//   }
	// });


	// app.post('/api/users/signup', usersController.signup)
	// app.post('/api/users/login',	usersController.login)

	// USER API ROUTES
	app.get('/api/users/me', authenticatedUser, usersAuthController.getMe)
	app.get('/api/users', authenticatedUser, checkIfAdmin, usersAuthController.index)

	app.route('/api/users/:id')
		.put(authenticatedUser, usersAuthController.update)
		.delete(authenticatedUser, usersAuthController.destroy)

	// JOBS API
	app.route('/api/kindjobs')
		.get(kindJobsController.index)
		.post(authenticatedUser, checkIfAdmin, kindJobsController.create)

	app.route('/api/kindjobs/:id')
	 	.put(authenticatedUser, checkIfAdmin, kindJobsController.update)
	 	.delete(authenticatedUser, checkIfAdmin, kindJobsController.destroy)

	app.route('/api/scopes')
		.get(scopesController.index)
		.post(authenticatedUser, checkIfAdmin, scopesController.create)

	app.route('/api/scopes/:id')
	 	.put(authenticatedUser, checkIfAdmin, scopesController.update)
	 	.delete(authenticatedUser, checkIfAdmin, scopesController.destroy)

	app.route('/api/employment_terms')
		.get(employmentTermsController.index)
		.post(authenticatedUser, checkIfAdmin, employmentTermsController.create)

	app.route('/api/employment_terms/:id')
		.put(authenticatedUser, checkIfAdmin, employmentTermsController.update)
		.delete(authenticatedUser, checkIfAdmin, employmentTermsController.destroy)

	app.route('/api/sectors')
		.get(sectorsController.index)
		.post(authenticatedUser, checkIfAdmin, sectorsController.create)

	app.route('/api/sectors/:id')
		.put(authenticatedUser, checkIfAdmin, sectorsController.update)
		.delete(authenticatedUser, checkIfAdmin, sectorsController.destroy)

	app.route('/api/locations')
		.get(locationsController.index)
		.post(authenticatedUser, checkIfAdmin, locationsController.create)

	app.route('/api/locations/:id')
		.put(authenticatedUser, checkIfAdmin, locationsController.update)
		.delete(authenticatedUser, checkIfAdmin, locationsController.destroy)

	app.route('/api/sgos')
		.get(sgosController.index)
		.post(authenticatedUser, checkIfAdmin, sgosController.create)

	app.route('/api/sgos/:id')
		.put(authenticatedUser, checkIfAdmin, sgosController.update)
		.delete(authenticatedUser, checkIfAdmin, sgosController.destroy)

	app.route('/api/applications')
		.get(authenticatedUser, checkIfAdmin, applicationsController.index)
		.post(applicationsController.create)

	app.route('/api/applications/:id')
		.put(authenticatedUser, checkIfAdmin, applicationsController.update)
		.delete(authenticatedUser, checkIfAdmin, applicationsController.destroy)

	app.route('/api/applications/fileupload')
		.get(applicationsController.sign)

 };
