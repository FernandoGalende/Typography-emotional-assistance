const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../../dev.env') })

module.exports = {
  dbURL: process.env.DBURL,
  WATSON_USER: process.env.WATSON_USER,
  WATSON_PWD: process.env.WATSON_PWD,
  WATSON_URL: process.env.WATSON_URL,
  WATSON_VERSION: process.env.WATSON_VERSION
}
