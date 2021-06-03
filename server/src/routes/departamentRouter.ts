import { Router } from 'express';
const router = Router()

const departamentController = require('../controllers/departamentController')

//пример
router.get('/', departamentController.getAll)
router.post('/', departamentController.create)

module.exports = router