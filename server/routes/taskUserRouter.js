const Router = require('express')
const taskUserController = require('../controllers/taskUserController')
const router = new Router()

//пример
router.get('/', taskUserController.getAll)
router.post('/', taskUserController.create)
router.put('/', taskUserController.update)

module.exports = router