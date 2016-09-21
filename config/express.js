// INITIALIZER FOR MY EXPRESS APPLICATION
  var express = require('express');
  var morgan = require('morgan');
  // logger
  var compress = require('compression');
  var cookieParser = require('cookie-parser');
  var bodyParser = require('body-parser');
  var path = require('path');
	// Parse incoming request bodies in a middleware before your handlers, availabe under the req.body property.
  var methodOverride = require('method-override');
	// Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.

  // for passport
  var passport       = require('passport');
  var flash          = require('connect-flash');
  var session        = require('express-session');


module.exports = function() {
  var app = express();

  // initialize the required module
  if ( !process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
  }

	app.use(function(req,res,next){
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Methods", "PUT,DELETE");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
		next();
	});

  app.use( bodyParser.urlencoded({
    extended: true
  }));
  app.use( bodyParser.json() );
  app.use( cookieParser() );

  // middleware for passport
  // be sure to use express.session() before passport.session() to ensure that the login session is restored in the correct order
  // express session is to stash a cookie in the client's session
  app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' }));
  app.use(passport.initialize());
  // the passport session is equivalent to app.use(passport.authenticate('session')); this in turn pulls the serializeUser and deserializeUser functions
  app.use(passport.session());
  app.use(flash());

	app.use( methodOverride() );

  app.use(express.static(path.resolve(__dirname, '../dist')));

  // for passport
  require('../backend/config/passport')(passport);

  app.use(function (req, res, next) {
    global.currentUser = req.user;
    next();
  });

  require('../backend/config/routes')(app);

  return app;
};
