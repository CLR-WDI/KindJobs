var express = require('express');
var app = express();
var mongoose = require('./config/mongoose');

// run database before express application object

var db = mongoose();

app.use(express.static(__dirname + '/dist'));

app.set('port',(process.env.PORT||1337));

app.listen(app.get('port'), function () {
  console.log('Server running at localhost: ' + app.get('port'));
});

module.exports = app;
