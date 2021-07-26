const PigStockModel = require('../models/pigstock')

class PigStockService {

  static async findAll() {
    return PigStockModel.find()
  }

  static async findById(id) {
    return PigStockModel.findById(id)
  }

  static async findByDate(date) {
    return PigStockModel.find({purchase_date: date})
  }

  static async create(dao) {
    return PigStockModel.create(dao)
  }

  static async removeOne(id) {
    return PigStockModel.findByIdAndRemove(id)
  }

}

module.exports = PigStockService