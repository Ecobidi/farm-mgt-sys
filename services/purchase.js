const PurchaseModel = require('../models/purchase')

class PurchaseService {

  static async findAll() {
    return PurchaseModel.find()
  }

  static async findById(vaccine_id) {
    return PurchaseModel.findById(vaccine_id)
  }

  static async findByDate(date) {
    return PurchaseModel.find({purchase_date: date})
  }

  static async create(dao) {
    return PurchaseModel.create(dao)
  }

  static async removeOne(id) {
    return PurchaseModel.findByIdAndRemove(id)
  }

}

module.exports = PurchaseService