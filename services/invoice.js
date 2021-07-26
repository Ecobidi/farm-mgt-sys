const InvoiceModel = require('../models/invoice')

class InvoiceService {

  static async findAll() {
    return InvoiceModel.find()
  }

  static async findById(vaccine_id) {
    return InvoiceModel.findById(vaccine_id)
  }

  static async findByDate(date) {
    return InvoiceModel.find({purchase_date: date})
  }

  static async create(dao) {
    return InvoiceModel.create(dao)
  }

  static async removeOne(id) {
    return InvoiceModel.findByIdAndRemove(id)
  }

}

module.exports = InvoiceService