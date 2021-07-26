const CustomerModel = require('../models/customer')

class CustomerService {
  
  static async findAll() {
    return CustomerModel.find()
  }

  static async findByName(name) {
    let nameRegex = new RegExp(name, 'ig')
    return CustomerModel.find({ $or: [{surname: nameRegex}, {other_name: nameRegex}] })
  }

  static async findById(id) {
    return CustomerModel.findById(id)
  }

  static async create(dao) {
    return CustomerModel.create(dao)
  }

  static async removeOne(customer_id) {
    return CustomerModel.findByIdAndRemove(customer_id)
  }

}

module.exports = CustomerService