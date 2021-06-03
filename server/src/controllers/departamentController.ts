import express from "express"

const { Departament } = require("../models/models")

class departamentController {

    async create(req: express.Request, res: express.Response) {
        const { name } = req.body
        const newsRec = await Departament.create({ name })
        return res.json(newsRec)
    }

    async getAll(req: express.Request, res: express.Response) {
        const getAllRec = await Departament.findAll()
        return res.json(getAllRec)
    }

}

module.exports = new departamentController()