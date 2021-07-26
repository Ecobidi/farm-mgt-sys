const mongoose = require('mongoose')

let ShedSchema = new mongoose.Schema({
  shed_name: {
    type: String,
    required: true,
  },
  shed_number: {
    type: Number,
    required: true,
  }
})

module.exports = mongoose.model('sheds', ShedSchema)