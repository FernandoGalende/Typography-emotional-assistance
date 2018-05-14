const crud = require('./crud');
const Comment = require('../models/Comment');

const router = crud(Comment);

router.get('/font/:id', (req,res) => {
  Comment.find({font_id:req.params.id}).then(comments => {
    return res.json(comments);
  })
})
module.exports = router;