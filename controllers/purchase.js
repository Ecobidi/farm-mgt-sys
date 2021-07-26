const PurchaseService = require('../services/purchase')

class PurchaseController {

  static async getPurchasePage(req, res) {
    if (req.query.search && req.query.search.length > 1) {
      let purchases = await PurchaseService.findByName(req.query.search) 
      return res.render('purchases', {purchases}) 
    }
    let purchases = await PurchaseService.findAll()
    res.render('purchases', {purchases})
  }
 
  static async createPurchasePage(req, res) {
    res.render('purchases-new', {error_msg: req.flash('error_msg'), errors: []})
  }

  static async createPurchase(req, res) {
    let dao = req.body
    try {
      await PurchaseService.create(dao)
      res.redirect('/purchases')
    } catch (err) {
      console.log(err)
      res.redirect('/purchases')
    }
  }

  static async removePurchase(req, res) {
    try {
      await PurchaseService.removeOne(req.params.purchase_id)
      res.redirect('/purchases')
    } catch (err) {
      console.log(err)
      req.flash('error_msg', 'Last Operation Failed')
      res.redirect('/purchases')
    }
  }

}

module.exports = PurchaseController