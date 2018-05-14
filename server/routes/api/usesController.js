const express = require("express");
const router = express.Router();
const axios = require('axios');
const ApiFont = require('../../models/apifont');

const initialUrl = 'https://fontsinuse.com/api/1/uses.json?family='
const finalUrl = '&category=graphic-design&count=4&page=1&sort=alpha&order=desc&api_key=cf9cf1f118dc2c447c93172744fb9f38&app_name=fernando-galende'
const initialIdUrl = 'https://fontsinuse.com/api/1/uses/'
const finalIdUrl= '.json?api_key=cf9cf1f118dc2c447c93172744fb9f38&app_name=fernando-galende'

const _ = require('lodash');

// Create
router.post("/", (req, res, next) => {
  const info = req.body.info;
  ApiFont.findOne({name: info}).then(font => {
    if (font !== null) return res.status(200).json(font);
    else {
      axios.get(initialUrl + info + finalUrl).then(font => {
        console.log("a por el segundo promise all")
        for (let i = 0; i < font.data.uses.length; i++){
          console.log(font.data.uses[i].id)
        }        
        let newApiFont = {name:info,data:font.data}
        new ApiFont(newApiFont).save().then(font => {                      
          res.status(200).json(font);
          }) 
        })
        
      }
    })
    .catch(e => console.log(e))
})
module.exports = router;