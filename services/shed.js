const ShedModel = require('../models/shed')

class ShedService {

  static async findByName(shed_name) {
    return ShedModel.find({shed_name})
  }
  
  static async findByShedNo(shed_number) {
    return ShedModel.findOne({shed_number})
  }

  static async findById(id) {
    return ShedModel.findById({id})
  }

  static async findAll() {
    return ShedModel.find()
  }

  static async create(dao) {
    return ShedModel.create(dao)
  }

  static async removeOne(id) {
    return ShedModel.findByIdAndRemove(id)
  }

}

module.exports = ShedService