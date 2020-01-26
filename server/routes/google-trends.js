const express = require('express');
const router = express.Router();
const controller = require('../controllers/google-trends');

router
    .get('/interestOverTime', controller.interestOverTime)
    .get('/interestByRegion', controller.interestByRegion)
    .get('/realTimeTrends', controller.realTimeTrends)
    .get('/dailyTrends', controller.dailyTrends)


module.exports = router
