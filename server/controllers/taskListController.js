const { TaskList } = require("../models/models")

class taskListController {

    async create(req, res) {
        const { name } = req.body
        const newsRec = await TaskList.create({ name })
        return res.json(newsRec)
    }

    async getAll(req, res) {
        const getAllRec = await TaskList.findAll()
        return res.json(getAllRec)
    }

    async update(req, res) {
        const { name, id } = req.body
        const count = await TaskList.update(
            { name, updatedAt: new Date() },
            { where: { id } })
        return res.json({ count })
    }


}

module.exports = new taskListController()