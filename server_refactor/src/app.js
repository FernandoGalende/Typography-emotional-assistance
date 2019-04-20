const express = require('express')
const logger = require('morgan')
const routes = require('./routes/routes.js')
const cors = require('cors')
const config = require('./utilities/config')

const mongoose = require('mongoose')
mongoose.connect(config.dbURL, { useNewUrlParser: true })

const app = express()
app.use(logger('dev'))

app.use(cors())

routes(app)

app.use(function (err, req, res, next) {
  if (err.status) {
    res.status(err.status)
      .send(`error: ${err.message}`)
  }
  res.status(500).send(`unknown error`)
})

module.exports = app
