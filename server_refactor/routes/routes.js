const { getListOfPhones, getSinglePhone } = require('./phones');
const { health } = require('./health')

const appRouter = (app) => {
  app.get('/phones', (req, res, next) => getListOfPhones(req, res, next))
  app.get('/phone/:id', (req, res, next) => getSinglePhone(req, res, next))
  app.get('/',(req, res, next) => health(req, res, next) )
}

module.exports = appRouter
