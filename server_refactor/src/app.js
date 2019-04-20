const express = require('express')
const logger = require('morgan')
const routes = require('./routes/routes.js')
const cors = require('cors')
const config = require('./utilities/config')
const errorHandler = require('./utilities/errorHandler')

const mongoose = require('mongoose')
mongoose.connect(config.dbURL, { useNewUrlParser: true })

const app = express()
app.use(logger('dev'))

app.use(cors())

routes(app)

// error handler
app.use(errorHandler)

module.exports = app
