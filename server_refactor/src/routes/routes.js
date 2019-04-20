const { getSinglePhone, getListOfFonts } = require('./phones')
const { health } = require('./health')

const appRouter = (app) => {
  app.get('/phone/:id', (req, res, next) => getSinglePhone(req, res, next))
  app.get('/font', (req, res, next) => getListOfFonts(req, res, next))
  app.get('/', (req, res, next) => health(req, res, next))
}

module.exports = appRouter
