const mongoose = require('mongoose')

let PurchaseSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  qty: {
    type: Number,
    required: true,
  },
  total_price: {
    type: Number,
    required: true,
  },
  amount_paid: {
    type: Number,
    required: true,
  },
  transaction_date: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('purchase', PurchaseSchema)