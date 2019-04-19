const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../dev.env') })

module.exports = {
  dbURL: process.env.DBURL
}
