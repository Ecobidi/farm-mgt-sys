const mongoose = require('mongoose')

let VaccineSchema = new mongoose.Schema({
  vaccine_name: {
    type: String,
    required: true,
  },
  date_administered: {
    type: Date,
    default: Date.now,
  },
  shed_name: {
    type: String
  },
  vaccine_duration: {
    type: Number,
  }
})

module.exports = mongoose.model('vaccines', VaccineSchema)