var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var LocationSchema = new mongoose.Schema({
  name:{
    type: String,
    trim: true,
    required: [true, 'Location name is required'],
    validate: [
      function (title) {
        return title.length <=60;
      },
      'Location name is too long'
    ]
  }
});

mongoose.model('Location', LocationSchema);
