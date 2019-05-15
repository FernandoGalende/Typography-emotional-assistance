const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const config = require('./utilities/config')
const errorHandler = require('./utilities/errorHandler')
const { health, fontRoutes, watson } = require('./routes')

const mongoose = require('mongoose')
mongoose.connect(config.dbURL, { useNewUrlParser: true })

const app = express()
app.use(logger('dev'))

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/health', health)
app.use('/font', fontRoutes)
app.use('/watson', watson)

// error handler
app.use(errorHandler)

module.exports = app
