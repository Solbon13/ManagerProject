const { Departament } = require("../models/models")

class departamentController {

    async create(req, res) {
        const { name } = req.body
        const newsRec = await Departament.create({ name })
        return res.json(newsRec)
    }

    async getAll(req, res) {
        const getAllRec = await Departament.findAll()
        return res.json(getAllRec)
    }

}

module.exports = new departamentController()