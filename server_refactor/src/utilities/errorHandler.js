function errorHandler (err, req, res, next) {
  if (err.status) {
    res.status(err.status)
      .send(`error: ${err.message}`)
  }
  res.status(500).send(`unknown error`)
}

module.exports = errorHandler