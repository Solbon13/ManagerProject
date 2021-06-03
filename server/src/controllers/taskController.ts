import express from "express"

const { Task } = require("../models/models")

class taskController {

    async create(req: express.Request, res: express.Response) {
        const { name, progressTask, dateEnd, taskListId } = req.body
        const newsRec = await Task.create({ name, progressTask, dateEnd, taskListId })
        return res.json(newsRec)
    }

    async getAll(req: express.Request, res: express.Response) {
        const getAllRec = await Task.findAll()
        return res.json(getAllRec)
    }

    async update(req: express.Request, res: express.Response) {
        const { name, progressTask, dateEnd, taskListId, id } = req.body
        const count = await Task.update(
            { name, progressTask, dateEnd, taskListId, updatedAt: new Date() },
            { where: { id } })
        return res.json({ count })
    }


}

module.exports = new taskController()