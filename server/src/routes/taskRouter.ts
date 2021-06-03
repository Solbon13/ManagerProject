import { Router } from 'express';
const router = Router()

const taskController = require('../controllers/taskController')

//пример
router.get('/', taskController.getAll)
router.post('/', taskController.create)
router.put('/', taskController.update)

module.exports = router