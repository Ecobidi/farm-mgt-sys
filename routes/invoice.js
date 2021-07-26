const router = require('express').Router()
const InvoiceController = require('../controllers/invoice')

router.get('/', InvoiceController.getInvoicesPage)

router.get('/new', InvoiceController.createInvoicePage)

router.post('/new', InvoiceController.createInvoice)

router.get('/remove/:invoice_id', InvoiceController.removeInvoice)

module.exports = router