const trendsService = require('../services/trends')
const Trend = require('../models/trends')


module.exports = {

    async findAll(req, res) {
        trendsList = await trendsService.findAll()
        console.log(trendsList)
        res.json(trendsList)
    },

    async save(req, res) {
        console.log(req.body)
        const trends = new Trend({...req.body})
        const _trends = await trendsService.store(trends)

        console.log('save trend - controllers')

        res.json(_trends)
    },
}
