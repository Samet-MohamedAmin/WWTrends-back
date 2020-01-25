const trendsService = require('../services/trends')
const trends = require('../models/trends')


module.exports = {

    async findAll(req, res) {
        trendsList = await trendsService.findAll()
        console.log(trendsList)
        res.json(trendsList)
    },

    async findByUserId(req, res) {
        const userId = req.params.userId.toLowerCase()
        trendsList = await trendsService.findByUserId(userId)
        res.json(trendsList)
    },

    async countByUserId(req, res) {
        const userId = req.params.userId.toLowerCase()
        const count = await trendsService.countByUserId(userId)
        res.json({count: count})
    },

    async save(req, res) {
        const trends = new trends({...req.body, userId: req.body.userId.toLowerCase()})
        const _trends = await trendsService.store(trends)
        res.json(_trends)
    },
    
    async clearCollection(req, res) {
        const result = await trendsService.clearCollection()
        res.json(result)
    }
}
