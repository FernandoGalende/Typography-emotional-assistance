const phonesData = require('../assets/phone-data.json')

function getListOfPhones (req, res) {
  res.status(200).send(JSON.stringify(phonesData))
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

module.exports = { getListOfPhones, getSinglePhone }
