const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const config = require('./utilities/config')
const errorHandler = require('./utilities/errorHandler')
const { health, fontRoutes } = require('./routes')

const mongoose = require('mongoose')
mongoose.connect(config.dbURL, { useNewUrlParser: true })

const app = express()
app.use(logger('dev'))

app.use(cors())

app.use('/health', health)
app.use('/font', fontRoutes)

// error handler
app.use(errorHandler)

module.exports = app
