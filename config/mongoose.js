var config = require('./config');
var mongoose = require('mongoose');

module.exports = function () {
  var db = mongoose.connect(config.db);
  require('../backend/models/employment_term.model');
  require('../backend/models/scope.model');
  require('../backend/models/sector.model');
  require('../backend/models/location.model');
  require('../backend/models/sgo.model');
  require('../backend/models/application.model');
  require('../backend/models/kind_job.model');
  return db;
}
