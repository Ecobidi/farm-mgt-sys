const router = require('express').Router()
const VaccineController = require('../controllers/vaccine')

router.get('/', VaccineController.getVaccinesPage)

router.get('/new', VaccineController.createVaccinePage)

router.post('/new', VaccineController.createVaccine)

router.get('/remove/:vaccine_id', VaccineController.removeVaccine)

module.exports = router
