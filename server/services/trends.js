const googleTrends = require('google-trends-api');

const Trend = require('../models/trends')


module.exports = {
    findAll() {
        return Trend.find()
    },

    store(trends) {
        const _trends = new Trend(trends).save()
        return _trends
    },


    findGoogleTrends() {
        // categories: https://github.com/pat310/google-trends-api/wiki/Google-Trends-Categories
        const query = {
            trendDate: new Date('2019-01-10'),
            geo: 'US',
            category: 'all'
        }
        const _testTrends = googleTrends.realTimeTrends(query)

        return _testTrends
    },
}
