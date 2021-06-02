const { TaskUser, Task, User, TaskList, Departament } = require("../models/models")

class taskUserController {

    async create(req, res) {
        const { userId, taskId } = req.body
        const newsRec = await TaskUser.create({ userId, taskId })
        return res.json(newsRec)
    }

    async getAll(req, res) {
        const getAllRec = await TaskUser.findAndCountAll({ include: [{ model: Task, include: TaskList }, {model: User, include: Departament}] })
        return res.json(getAllRec)
    }

    async update(req, res) {
        const { userId, taskId, id } = req.body
        const count = await TaskUser.update(
            { userId, taskId, updatedAt: new Date() },
            { where: { id } })
        return res.json({ count })
    }

}

module.exports = new taskUserController()