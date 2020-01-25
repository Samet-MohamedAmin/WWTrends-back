const express = require('express');
const router = express.Router();
const controller = require('../controllers/trends');

router
    .get('', controller.findAll)
    .get('/:userId', controller.findByUserId)
    .get('/:userId/count', controller.countByUserId)
    .post('', controller.save)
    .delete('/danger/all', controller.clearCollection)

module.exports = router
