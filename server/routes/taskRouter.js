const Router = require('express')
const taskController = require('../controllers/taskController')
const router = new Router()

//пример
router.get('/', taskController.getAll)
router.post('/', taskController.create)
router.put('/', taskController.update)

module.exports = router