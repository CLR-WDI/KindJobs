var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var SGOSchema = new mongoose.Schema({
  SGO_name:{
    type: String,
    trim: true,
    required: [true, 'SGO name is required'],
    validate: [
      function (title) {
        return title.length <=60;
      },
      'SGO name is too long'
    ]
  },
  SGO_icon: String
});

mongoose.model('SGO', SGOSchema);
