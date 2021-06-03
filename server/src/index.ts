import * as fs from 'fs';

const express = require('express')
const cors = require('cors')

require('dotenv').config()

const PORT = process.env.PORT || 1300

const sequelize = require('./config/db')
const models = require('./models/models')
const router = require('./routes/index')
// const errorHandler = require('./middleware/ErrorHandlingMiddleware')
// const fileUpload = require('express-fileupload')

// const path = require('path')

const app = express()

app.use(cors())
app.use(express.json())
// app.use(express.static(path.resolve(__dirname, 'static')))
// app.use(fileUpload({}))
app.use('/api', router)


// app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()