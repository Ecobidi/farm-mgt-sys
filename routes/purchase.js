const router = require('express').Router()
const PurchaseController = require('../controllers/purchase')

router.get('/', PurchaseController.getPurchasePage)

router.get('/new', PurchaseController.createPurchasePage)

router.post('/new', PurchaseController.createPurchase)

router.get('/remove/:purchase_id', PurchaseController.removePurchase)

module.exports = router