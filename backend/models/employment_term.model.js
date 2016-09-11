var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var EmploymentTermSchema = new mongoose.Schema({
  employment_term:{
    type: String,
    trim: true,
    required: [true, 'Employment term name is required'],
    validate: [
      function (title) {
        return title.length <=60;
      },
      'Employment term name is too long'
    ]
  }
});

mongoose.model('EmploymentTerm', EmploymentTermSchema);
