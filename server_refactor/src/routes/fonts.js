const Font = require('../models/font')

const getListOfFonts = (res, next) => {
  Font.find()
    .then(data => {
      return data.length > 0 ?
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
}

const getSingleFont = (req, res, next) => {
  const { id } = req.params
  Font.findById(id)
    .then(data => res.status(200).json(data))
    .catch( () => next({
      status: 404,
      message: 'Font not found'
    }))
}

module.exports = {
  getSingleFont,
  getListOfFonts
}
