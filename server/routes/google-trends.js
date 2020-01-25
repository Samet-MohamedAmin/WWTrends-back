const express = require('express');
const router = express.Router();
const controller = require('../controllers/google-trends');

router
    .get('/interestOverTime', controller.interestOverTime)


module.exports = router
