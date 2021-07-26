const InvoiceService = require('../services/invoice')

class InvoiceController {

  static async getInvoicesPage(req, res) {
    if (req.query.search && req.query.search.length > 1) {
      let invoices = await InvoiceService.findByName(req.query.search) 
      return res.render('invoices', {invoices}) 
    }
    let invoices = await InvoiceService.findAll()
    res.render('invoices', {invoices})
  }
 
  static async createInvoicePage(req, res) {
    res.render('invoices-new', {error_msg: req.flash('error_msg'), errors: []})
  }

  static async createInvoice(req, res) {
    let dao = req.body
    try {
      await InvoiceService.create(dao)
      res.redirect('/invoices')
    } catch (err) {
      console.log(err)
      res.redirect('/invoices')
    }
  }

  static async removeInvoice(req, res) {
    try {
      await InvoiceService.removeOne(req.params.invoice_id)
      res.redirect('/invoices')
    } catch (err) {
      console.log(err)
      req.flash('error_msg', 'Last Operation Failed')
      res.redirect('/invoices')
    }
  }

}

module.exports = InvoiceController