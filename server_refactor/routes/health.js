function health(req, res, next) {
  res.status(200).send('Everything is ok in backend side')
}

module.exports = { health }