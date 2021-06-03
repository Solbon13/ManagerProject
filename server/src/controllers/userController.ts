import express from "express"
import { GetUserAuthInfoRequest } from "../utils/GetUserAuthInfoRequest";
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models/models');

const generateJwt = (id: number, email: string, role: string) => {
    return jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}

class UserController {

    async registration(req: express.Request, res: express.Response) {
        try {
            const { firstName, lastName, patronymic, email, password, departamentId } = req.body
            if (!email || !password) {
                return res.json({error:'Некорректный email или password'})
            }
            const candidate = await User.findOne({ where: { email } })
            if (candidate) {
                return res.json({error:'Пользователь с таким email уже существует'})
            }
            
            const hashPassword = await bcrypt.hash(password, 5)
            const user = await User.create({ firstName, lastName, patronymic, email, password: hashPassword, departamentId })

            const token = generateJwt(user.id, user.email, user.role)
            return res.json({ token, user: {...user.dataValues, 'password': ''} })
        } catch (e) {
            return res.json({error:e})
        }

    }

    async login(req: express.Request, res: express.Response) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({ where: { email } })
            if (!user) {
                return res.json({error:'Пользователь не найден или не верный пароль'})
            }
            let comparePassword = bcrypt.compareSync(password, user.password)
            if (!comparePassword) {
                return res.json({error:'Пользователь не найден или не верный пароль'})
            }
            const token = generateJwt(user.id, user.email, user.email)
            return res.json({ token, user })
        } catch (e) {
            return res.json({error:e})
        }
    }

    async check(req: GetUserAuthInfoRequest, res: express.Response) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        const user = await User.findOne({ where: { email: req.user.email } })
        return res.json({ token, user })
    }

    async getAll(req: express.Request, res: express.Response) {
        try {
            const users = await User.findAll()
            return res.json(users)
        //     const getAllRec = await Departament.findAll()
        // return res.json(getAllRec)
        } catch (e) {
            return res.json({error:e})
        }
    }

    async destroy(req: express.Request, res: express.Response) {
        const { id } = req.query
        try {
            const count = await User.destroy(
                { where: { id } })
            return res.json({ count })
        } catch (e) {
            return res.json({error:e})
        }
    }

    async update(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            let { id, firstName, lastName, patronymic, email, password, departamentId } = req.body
            if (!email) {
                res.json({error:'Некорректный email'})
            }
            let hashPassword = await bcrypt.hash(password, 5)
            let user = await User.findOne({ where: { email } })
            if (password === '') {
                hashPassword = user.password;
            }
            
            await User.update(
                { firstName, lastName, patronymic, email, password: hashPassword, departamentId },
                { where: { id } })

            user = await User.findOne({ where: { email } })
            return res.json({ user })
        } catch (e) {
            return res.json({error:e})
        }
    }
}

module.exports = new UserController()