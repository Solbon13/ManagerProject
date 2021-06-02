const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
// const authMiddleware = require('../middleware/authMiddleware')

//пример

router.post('/', userController.registration)
router.post('/login', userController.login)
// router.get('/auth', authMiddleware, userController.check)
router.get('/', userController.getAll)
// router.put('/', authMiddleware, userController.update)
// router.delete('/', authMiddleware, userController.destroy)

module.exports = router