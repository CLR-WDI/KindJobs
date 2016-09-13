var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var ScopeSchema = new mongoose.Schema({
  name:{
    type: String,
    trim: true,
    required: [true, 'Scope name is required'],
    validate: [
      function (title) {
        return title.length <=60;
      },
      'Scope name is too long'
    ]
  }
});

mongoose.model('Scope', ScopeSchema);
