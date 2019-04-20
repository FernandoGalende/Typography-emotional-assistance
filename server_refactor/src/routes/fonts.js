const express = require('express')
const router = express.Router()

const Font = require('../models/font')

router.get('/', (req, res, next) => {
  Font.find()
    .then(data => {
      return data.length > 0 || data !== null ?
      res.status(200).json(data) :
      next({
        status: 404,
        message: 'No Data'
      })
    })
    .catch(err => next({
      status: 500,
      message: err.message
    }))
})

router.get('/:id', (req, res, next) => {
  const { id } = req.params
  Font.findById(id)
    .then(data => {
      if (data === null ) {
        throw new Error()
      }
      res.status(200).json(data)
    })
    .catch( () => next({
      status: 404,
      message: 'Font not found'
    }))
})

module.exports = router
