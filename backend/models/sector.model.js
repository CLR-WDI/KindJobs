var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var SectorSchema = new mongoose.Schema({
  sector_name:{
    type: String,
    trim: true,
    required: [true, 'Sector name is required'],
    validate: [
      function (title) {
        return title.length <=60;
      },
      'Sector name is too long'
    ]
  }
});

mongoose.model('Sector', SectorSchema);
