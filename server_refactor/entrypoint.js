const app = require('./app')
const http = require('http')
const logger = require('debug')('backend:server')

const port = normalizePort(process.env.PORT || '3000')

app.set('port', port)

const server = http.createServer(app)
server.listen(port, () => logger(`Proxy server started at port: ${port}`)
)
server.on('error', onError)

nodeInspectSetup()

function normalizePort (val) {
  const port = parseInt(val, 10)
  if (isNaN(port)) { return val } // named pipe
  if (port >= 0) { return port } // port number
  return false
}

function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }
  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`
  switch (error.code) {
    case 'EACCES':
      logger(`${bind} requires elevated privileges`)
      process.exit(1)
    case 'EADDRINUSE':
      logger(`${bind} is already in use`)
      process.exit(1)
    default:
      logger('Server error')
      console.error(error)
      logger.error(error)
      throw error
  }
}

function nodeInspectSetup () {
  const script = process.env.npm_lifecycle_script
  const scriptIncludesInspectFlag = !script.includes('node --inspect') && !script.includes('nodemon --inspect')
  if (!script || scriptIncludesInspectFlag) return
  const http = require('http')
  const url = 'http://localhost:9229/json/list'
  http.get(url, res => {
    res.setEncoding('utf8')
    let body = ''
    res.on('data', data => { body += data })
    res.on('end', () => {
      const json = JSON.parse(body)
      const devtoolsURL = json[0].devtoolsFrontendUrl
      console.log('- Detected Node Inspector flag --inspect')
      console.log('- Copy & paste this URL in a new tab (only works in Chrome):')
      console.log(`    ${devtoolsURL}`)
    })
  })
}
