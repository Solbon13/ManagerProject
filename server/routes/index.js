const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const departamentRouter = require('./departamentRouter')
const taskRouter = require('./taskRouter')
const taskListRouter = require('./taskListRouter')
const taskUserRouter = require('./taskUserRouter')

router.use('/user', userRouter)
router.use('/departament', departamentRouter)
router.use('/task', taskRouter)
router.use('/taskList', taskListRouter)
router.use('/taskUser', taskUserRouter)

module.exports = router