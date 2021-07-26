const router = require('express').Router()
const ShedController = require('../controllers/shed')

router.get('/', ShedController.getShedsPage)

router.get('/new', ShedController.createShedPage)

router.post('/new', ShedController.createShed)

router.get('/remove/:shed_id', ShedController.removeShed)

module.exports = router
