const Router = require('express')
const router = new Router()
const departamentController = require('../controllers/departamentController')

//пример
router.get('/', departamentController.getAll)
router.post('/', departamentController.create)

module.exports = router