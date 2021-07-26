const VaccineModel = require('../models/vaccine')

class VaccineService {

  static async findByName(name) {
    let nameRegex = new RegExp(name, 'ig')
    return VaccineModel.find({name: nameRegex})
  }
  
  static async findAll() {
    return VaccineModel.find()
  }

  static async findById(vaccine_id) {
    return VaccineModel.findById(vaccine_id)
  }

  static async create(dao) {
    return VaccineModel.create(dao)
  }

  static async removeOne(id) {
    return VaccineModel.findByIdAndRemove(id)
  }

}

module.exports = VaccineService