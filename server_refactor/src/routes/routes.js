const fontRoutes = require('./fonts')
const { health } = require('./health')

const appRouter = (app) => {
  app.get('/fonts', (req, res, next) => fontRoutes.getListOfFonts(res, next))
  app.get('/font/:id', (req, res, next) => fontRoutes.getSingleFont(req, res, next))
  app.get('/', (req, res, next) => health(req, res, next))
  app.get('*', (req, res, next) => next({ status: 404, message: 'The route does not exist' }))
}

module.exports = appRouter
