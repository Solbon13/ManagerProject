import { Router } from 'express';
const router = Router()

const taskUserController = require('../controllers/taskUserController')

//пример
router.get('/', taskUserController.getAll)
router.post('/', taskUserController.create)
router.put('/', taskUserController.update)

module.exports = router