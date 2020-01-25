const express = require('express');
const router = express.Router();
const controller = require('../controllers/trends');

router
    .get('', controller.findAll)
    .post('', controller.save)

module.exports = router
