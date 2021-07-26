const mongoose = require('mongoose')

let InvoiceSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  total_amount: {
    type: Number,
    required: true
  },
  amount_paid: {
    type: Number,
  },
  transaction_date: {
    type: Date,
    default: Date.now
  },
  customer_name: {
    type: String,
  }
})

module.exports = mongoose.model('invoice', InvoiceSchema)