import express from "express"

const { TaskList } = require("../models/models")

class taskListController {

    async create(req: express.Request, res: express.Response) {
        const { name } = req.body
        const newsRec = await TaskList.create({ name })
        return res.json(newsRec)
    }

    async getAll(req: express.Request, res: express.Response) {
        const getAllRec = await TaskList.findAll()
        return res.json(getAllRec)
    }

    async update(req: express.Request, res: express.Response) {
        const { name, id } = req.body
        const count = await TaskList.update(
            { name, updatedAt: new Date() },
            { where: { id } })
        return res.json({ count })
    }


}

module.exports = new taskListController()