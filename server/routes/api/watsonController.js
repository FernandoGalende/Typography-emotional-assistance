const express = require("express");
const watsonController = express.Router();
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

const toneAnalyzer = new ToneAnalyzerV3({
  username: '38e597e3-60b8-4727-9fdc-c52986351504',
  password: 'rxtwD0mk0lWq',
  version: '2016-05-19',
  url: 'https://gateway.watsonplatform.net/tone-analyzer/api'
});

watsonController.post("/", (req, res, next) => {
  
  console.log(req.body.info)
  let { info } = req.body

  toneAnalyzer.tone({
      tone_input: info,
      content_type: 'text/plain'
    },
    function (err, tone) {
      if (err) console.log(err);
      else {
        console.log(JSON.stringify(tone, null, 2))
        res.status(200).json(tone);
      }
    }
  )


});

module.exports = watsonController;