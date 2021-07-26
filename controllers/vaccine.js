const VaccineService = require('../services/vaccine')

class VaccineController {

  static async getVaccinesPage(req, res) {
    try {
      let vaccines = await VaccineService.findAll()
      res.render('vaccines', {vaccines})
    } catch (err) {
      console.log(err)
      res.redirect('/vaccines')
    }
  }

  static async createVaccinePage(req, res) {
    res.render('vaccines-new', { error_msg: req.flash('error_msg') || '' })
  }

  static async createVaccine(req, res) {
    try {
      let dao = req.body
      await VaccineService.create(dao)
      res.redirect('/vaccines')
    } catch (err) {
      console.log(err)
      res.redirect('/vaccines/new')
    }
  }

  static async removeVaccine(req, res) {
    try {
      await VaccineService.removeOne(req.params.vaccine_id)
      res.redirect('/vaccines')
    } catch (err) {
      console.log(err)
      res.redirect('/vaccines')
    }
  }

}

module.exports = VaccineController