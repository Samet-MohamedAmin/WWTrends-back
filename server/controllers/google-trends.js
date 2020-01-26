const trendsService = require('../services/google-trends')
const Trend = require('../models/trends')


module.exports = {

    async interestOverTime(req, res) {
        const keyword = req.query.keyword
        const year = req.query.year

        console.log(keyword, year)

        let trends
        try {
            trends = await trendsService.interestOverTime(keyword, year)
        } catch (error) {
            console.log(error)
        }

        response = JSON.parse(trends)
        res.json(response)
    },

    async interestByRegion(req, res) {
        const keyword = req.query.keyword
        
        let trends
        try {
            trends = await trendsService.interestByRegion(keyword)
        } catch (error) {
            console.log(error)
        }

        response = JSON.parse(trends)
        res.json(response)
    },

    async realTimeTrends(req, res) {
        const geo = req.query.geo
        const category = req.query.category
        
        let trends
        try {
            trends = await trendsService.realTimeTrends(geo, category)
        } catch (error) {
            console.log(error)
        }

        response = JSON.parse(trends)
        res.json(response)
    },

    async dailyTrends(req, res) {
        const date = new Date(req.query.date)
        const geo = req.query.geo
        
        let trends
        try {
            trends = await trendsService.dailyTrends(date, geo)
        } catch (error) {
            console.log(error)
        }

        response = JSON.parse(trends)
        res.json(response)
    },
}
