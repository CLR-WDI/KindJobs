var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var ApplicationSchema = new Schema({
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
  tel_no: Number,
  expected_salary: Number,
  yrs_rel_exp: Number,
  highest_qualification: String,
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
  link_to_cv: String
});

ApplicationSchema.set('timestamps',{});

var Application = mongoose.model('Application', ApplicationSchema);

module.export = Application;
