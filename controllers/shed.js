const ShedService = require('../services/shed')

class ShedController {

  static async getShedsPage(req, res) {
    try {
      let sheds = await ShedService.findAll()
      res.render('sheds', {sheds})
    } catch (err) {
      console.log(err)
      res.redirect('/sheds')
    }
  }

  static async createShedPage(req, res) {
    res.render('sheds-new', { error_msg: req.flash('error_msg') || '' })
  }

  static async createShed(req, res) {
    try {
      let dao = req.body
      await ShedService.create(dao)
      res.redirect('/sheds')
    } catch (err) {
      console.log(err)
      res.redirect('/sheds/new')
    }
  }

  static async removeShed(req, res) {
    try {
      await ShedService.removeOne(req.params.shed_id)
      res.redirect('/sheds')
    } catch (err) {
      console.log(err)
      res.redirect('/sheds')
    }
  }

}

module.exports = ShedController