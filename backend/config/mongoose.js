var config = require('./config');
var mongoose = require('mongoose');

module.exports = function () {
  var db = mongoose.connect(config.db);
  require('../models/employment_term.model');
  require('../models/scope.model');
  require('../models/sector.model');
  require('../models/location.model');
  require('../models/sgo.model');
  require('../models/application.model');
  require('../models/kind_job.model');
  return db;
}
