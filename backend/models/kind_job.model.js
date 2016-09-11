var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var KindJobSchema = new Schema({
  image: String,
  title: {
    type: String,
    trim: true,
    required: [true, 'Job title is required'],
    validate: [
      function (title) {
        return title.length <=60;
      },
      'Title is too long'
    ]
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  salary: Number,
  min_yrs_exp: Number,
  min_qualification: String,
  scope_id:{
    required: [true, 'Scope is required'],
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Scope'
  },
  employment_term_id: {
    required: [true, 'Employment term is required'],
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EmploymentTerm'
  },
  sector_id:{
    required: [true, 'Sector is required'],
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sector'
  },
  location_id:{
    required: [true, 'Location is required'],
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location'
  },
  sgo_id:{
    required: [true,'SGO is required'],
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SGO'
  },
  deadline: Date
});

KindJobSchema.set('timestamps',{});

KindJobSchema.index({
  "title":"text",
  "description":"text"
},
{
  "weights": {
    title: 2,
    description: 1
  }
})

var KindJob = mongoose.model('KindJob', KindJobSchema);

module.export = KindJob;
