const router = require('express').Router()
const PigStockController = require('../controllers/pigstock')

router.get('/', PigStockController.getPigStocksPage)

router.get('/new', PigStockController.createPigStockPage)

router.post('/new', PigStockController.createPigStock)

router.get('/remove/:pigstock_id', PigStockController.removePigStock)

module.exports = router