
const express = require('express');
const router = express.Router();
const controller = require('../controllers/main');

router
    .get('/test', controller.test)
    .post('/test', controller.testPost);

module.exports = router
