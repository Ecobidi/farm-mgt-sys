const PigStockService = require('../services/pigs-stock')

class PigStockController {

  static async getPigStocksPage(req, res) {
    if (req.query.search && req.query.search.length > 1) {
      let stocks = await PigStockService.findByDate(req.query.search) 
      return res.render('pigstocks', {stocks}) 
    }
    let pigstocks = await PigStockService.findAll()
    res.render('pigstocks', {pigstocks})
  }
 
  static async createPigStockPage(req, res) {
    res.render('pigstocks-new', {error_msg: req.flash('error_msg'), errors: []})
  }

  static async createPigStock(req, res) {
    let dao = req.body
    try {
      await PigStockService.create(dao)
      res.redirect('/pigstocks')
    } catch (err) {
      console.log(err)
      res.redirect('/pigstocks')
    }
  }

  static async removePigStock(req, res) {
    try {
      await PigStockService.removeOne(req.params.pigstock_id)
      res.redirect('/pigstocks')
    } catch (err) {
      console.log(err)
      req.flash('error_msg', 'Last Operation Failed')
      res.redirect('/pigstocks')
    }
  }

}

module.exports = PigStockController