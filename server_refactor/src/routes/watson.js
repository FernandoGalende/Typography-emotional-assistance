const express = require('express')
const router = express.Router()
const config = require('../utilities/config')

const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3')

const toneAnalyzer = new ToneAnalyzerV3({
  username: config.WATSON_USER,
  password: config.WATSON_PWD,
  url: config.WATSON_URL,
  version: config.WATSON_VERSION
})

router.post('/', (req, res, next) => {
  const { info } = req.body

  toneAnalyzer.tone({
    tone_input: info,
    content_type: 'text/plain'
  },
  (err, tone) => {
    if (err) {
      next({
        status: err.code || 403,
        message: err.message
      })
    } else {
      res.status(200).json(getCategoryPercents(tone))
    }
  })
})

const getCategoryPercents = tone => {
  let result = {}
  const category = tone['document_tone']['tone_categories']

  result.anger = category[0].tones[0].score
  result.fear = category[0].tones[2].score
  result.joy = category[0].tones[3].score
  result.analytical = category[1].tones[0].score
  result.confident = category[1].tones[1].score
  result.tentative = category[2].tones[3].score

  for (let key in result) {
    result[key] = Math.floor(result[key] * 100)
  }

  return result
}

module.exports = router
