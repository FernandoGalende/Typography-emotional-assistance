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
  let result = {
    anger: Number,
    fear: Number,
    joy: Number,
    analytical: Number,
    confident: Number,
    tentative: Number
  }
  let { info } = req.body

  toneAnalyzer.tone({
      tone_input: info,
      content_type: 'text/plain'
    },
    function (err, tone) {
      if (err) console.log(err);
      else {
        console.log(JSON.stringify(tone,null,2))
        console.log("json-->"+JSON.stringify(tone.document_tone.tone_categories[0].tones[3].tone_name))
        console.log("json-->"+JSON.stringify(tone.document_tone.tone_categories[0].tones[3].score))
        result.anger = JSON.stringify(tone.document_tone.tone_categories[0].tones[3].score)
        result.fear = JSON.stringify(tone.document_tone.tone_categories[0].tones[4].score)
        result.joy = JSON.stringify(tone.document_tone.tone_categories[0].tones[3].score)
        result.analytical = JSON.stringify(tone.document_tone.tone_categories[1].tones[2].score)
        result.confident = JSON.stringify(tone.document_tone.tone_categories[2].tones[0].score)
        result.tentative = JSON.stringify(tone.document_tone.tone_categories[2].tones[3].score)
        console.log(result);
        res.status(200).json(result);
      }
    }
  )


});

module.exports = watsonController;