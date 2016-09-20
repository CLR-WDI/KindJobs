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
	app.use( methodOverride() );

  app.use(express.static(path.resolve(__dirname, '../dist')));

  require('../backend/config/routes')(app);


  return app;
};
