const trendsService = require('../services/google-trends')
const Trend = require('../models/trends')


module.exports = {

    async interestOverTime(req, res) {
        const keyword = req.query.keyword
        const year = req.query.year

        
        trends = await trendsService.interestOverTime(keyword, year)

        response = JSON.parse(trends)
        res.json(response)
    },

    async save(req, res) {
        console.log(req.body)
        const trends = new Trend({...req.body})
        const _trends = await trendsService.store(trends)

        console.log('save trend - controllers')

        res.json(_trends)
    },
}
