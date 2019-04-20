const phonesData = require('../../assets/phone-data.json')
const Font = require('../models/font')

function getListOfFonts (req, res) {
  Font.find().then(objects => res.status(200).json(objects))
}

function getSinglePhone (req, res, next) {
  let data = phonesData.data
    .filter(phone => phone.id === req.params.id)

  if (!data || data.length <= 0) {
    return next({
      status: 500,
      message: 'No data'
    })
  }
  res.status(200).send(JSON.stringify(data))
}

module.exports = {
  getSinglePhone,
  getListOfFonts
}
