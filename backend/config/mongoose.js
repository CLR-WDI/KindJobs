var config = require('./config');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = function () {
  var db = mongoose.connect(config.db);
  require('../models/employment_term.model');
  require('../models/scope.model');
  require('../models/sector.model');
  require('../models/location.model');
  require('../models/sgo.model');
  require('../models/kind_job.model');
  require('../models/application.model');
  require('../models/user.model');
  return db;
}
