const express = require('express');
const router  = express.Router();
const Font = require('../../models/font');
const Question = require('../../models/question');
// const app = require('../../app');

const authRoutes = require('./authController');
const watsonRoutes = require('./watsonController');
const usesRoutes = require('./usesController');



router.use('/font', require('./crud')(Font));
router.use('/font/:id', require('./crud')(Font));
router.use('/question', require('./crud')(Question));
router.use('/', authRoutes);
router.use('/watson', watsonRoutes);
router.use('/uses', usesRoutes);

module.exports = router;