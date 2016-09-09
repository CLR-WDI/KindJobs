var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var KindJobSchema = new Schema({
  job: String,

});

mongoose.model('KindJob', KindJobSchema);
