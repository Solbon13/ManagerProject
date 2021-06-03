import express from "express";
import { GetUserAuthInfoRequest } from "../utils/GetUserAuthInfoRequest";
const jwt = require('jsonwebtoken')

module.exports = function (req: GetUserAuthInfoRequest, res: express.Response, next: express.NextFunction) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization?.split(' ')[1] // Bearer asfasnfkajsfnjk
        if (!token) {
            return res.status(401).json({message: "Не авторизован"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    } catch (e) {
        res.status(401).json({message: "Не авторизован1"})
    }
};