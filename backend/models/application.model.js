var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var ApplicationSchema = new Schema({
  kindjobs_id:{
    type: String,
    required:[true, "Kind Jobs ID is required"]
  },
  name: {
    type: String,
    trim: true,
    required: [true, 'Name is required'],
    validate: [
      function (name) {
        return name.length <=80;
      },
      'Name is too long'
    ]
  },
  email: {
    type: String,
    required: [true, 'Description is required'],
    match: [/.+\@.+\..+/, 'Please enter a valid email address']
  },
  tel_no: {
    type: Number,
    required: [true,'Telephone number is required']},
  expected_salary: {
    type: Number,
    required: [true,'Expected salary is required']},
  yrs_rel_exp: {
    type: Number,
    required: [true,'Years of relevant salary is required']},
  highest_qualification: {
    type: String,
    required: [true,'Highest relevant qualification is required']},
  message_to_recruiters: {
    type: String,
    trim: true,
    validate: [
      function (message) {
        return message.length <=800;
      },
      'Message is too long'
    ]
  },
  link_to_cv: {
    type: String,
    // required: [true,'CV is required']
  }
});

ApplicationSchema.set('timestamps',{});

var Application = mongoose.model('Application', ApplicationSchema);

module.export = Application;
