const express = require("express");
const router = express.Router();
const axios = require('axios');
const ApiFont = require('../../models/apifont');
const ApiFontUse = require('../../models/apifontUse');


const initialUrl = 'https://fontsinuse.com/api/1/uses.json?family='
const finalUrl = '&category=graphic-design&count=4&page=1&sort=alpha&order=desc&api_key=cf9cf1f118dc2c447c93172744fb9f38&app_name=fernando-galende'
const initialIdUrl = 'https://fontsinuse.com/api/1/uses/'
const finalIdUrl= '.json?api_key=cf9cf1f118dc2c447c93172744fb9f38&app_name=fernando-galende'

const _ = require('lodash');

// Create uses
router.post("/", (req, res, next) => {
  const info = req.body.info;
  ApiFont.findOne({name: info}).then(font => {
    if (font !== null) return res.status(200).json(font);
    else {
      axios.get(initialUrl + info + finalUrl).then(font => {       
        let newApiFont = {name:info,data:font.data}
        new ApiFont(newApiFont).save().then(font => {                      
          res.status(200).json(font);
          }) 
        })        
      }
    })
    .catch(e => console.log(e))    
})
// Create use images
router.get("/use/:id", (req, res, next) => {  
  const id = req.params.id; 
  console.log(id)
  ApiFontUse.findOne({id: id}).then( one => {
    if (one !== null) return res.status(200).json(one);
    else { 
      axios.get(initialIdUrl + id + finalIdUrl).then(one => {       
        // console.log(initialIdUrl + id + finalIdUrl)
        let newApiFontUse = {id:id, use: one.data.uses}
        new ApiFontUse(newApiFontUse).save().then(font => {                      
          res.status(200).json(font);
          }) 
        })        
      }
    })
    .catch(e => console.log(e))    
})
// console.log("a por el segundo promise all")
// for (let i = 0; i < font.data.uses.length; i++){            
// ApiFont.findByIdAndUpdate(font.id,{src: initialIdUrl+font.data.uses[i].id+finalIdUrl})   
module.exports = router;