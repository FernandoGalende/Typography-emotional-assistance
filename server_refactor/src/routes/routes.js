const fontRoutes = require('./fonts')
const { health } = require('./health')

const appRouter = (app) => {
  app.get('/fonts', (req, res, next) => fontRoutes.getListOfFonts(res, next))
  app.get('/font/:id', (req, res, next) => fontRoutes.getSingleFont(req, res, next))
  app.get('/health', (req, res, next) => health(req, res, next))
}

module.exports = appRouter
