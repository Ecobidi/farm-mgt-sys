const mongoose = require('mongoose')

const PigStockSchema = new mongoose.Schema({
  breed: {
    type: String,
    required: true
  },
  qty: {
    type: Number,
    required: true,
  },
  date_added: {
    type: Date,
    default: Date.now
  },
  shed_name: {
    type: String,
  },
  additional_info: {
    type: String,
  }
})

module.exports = mongoose.model('pigstock', PigStockSchema)