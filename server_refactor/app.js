const express = require('express');
const routes = require('./routes/routes.js');
const cors = require('cors')

const app = express()
app.use(cors())
routes(app);

app.use(function (err, req, res, next) {
  if(err.status){
    res.status(err.status)
    .send(`error: ${err.message}`)
  }
  res.status(500).send(`unknown error`)
})

app.listen(3000, () => console.log('app running on port 3000'));
