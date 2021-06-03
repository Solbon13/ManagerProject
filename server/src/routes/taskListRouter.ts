import { Router } from 'express';
const router = Router()

const taskListController = require('../controllers/taskListController')

//пример
router.get('/', taskListController.getAll)
router.post('/', taskListController.create)

module.exports = router