const Router = require('express')
const taskListController = require('../controllers/taskListController')
const router = new Router()

//пример
router.get('/', taskListController.getAll)
router.post('/', taskListController.create)

module.exports = router