const mongoose = require('mongoose')

let CustomerSchema = new mongoose.Schema({
  other_names: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
  }
})

module.exports = mongoose.model('customer', CustomerSchema)