const express = require('express');
const router  = express.Router();
const Font = require('../../models/font');
const Question = require('../../models/question');
// const app = require('../../app');

const authRoutes = require('./authController');
const watsonRoutes = require('./watsonController');


router.use('/font', require('./crud')(Font));
router.use('/question', require('./crud')(Question));
router.use('/', authRoutes);
router.use('/watson', watsonRoutes);


module.exports = router;