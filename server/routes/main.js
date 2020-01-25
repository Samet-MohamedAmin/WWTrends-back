
const express = require('express');
const router = express.Router();
const controller = require('../controllers/main');

router
    .get('/test', controller.test)
    .post('/test', controller.testPost)
    .get('/test/google', controller.testGoogle);

module.exports = router
