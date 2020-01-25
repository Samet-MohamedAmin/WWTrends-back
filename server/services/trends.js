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

        // const query = {
        //     keyword: 'tunis',
        //     resolution: 'COUNTRY',
        // }
        // const _testTrends = googleTrends.interestByRegion(query)

        // const query = {
        // }
        // const _testTrends = googleTrends.(query)

        // ----------------- real work here ------------------------------
        // const query = {
        //     keyword: 'Valentines Day',
        //     startTime: new Date('2018-01-01'),
        //     endTime: new Date('2018-12-31'),
        // }

        // const _testTrends = googleTrends.interestOverTime(query)

        // const query = {
        //     keyword: 'tunis',
        //     resolution: 'COUNTRY'
        // }
        // const _testTrends = googleTrends.interestByRegion(query)

        // const query = {
        //     geo: 'US',
        //     category: 'all'
        // }

        // const _testTrends = googleTrends.realTimeTrends(query)

        // const query = {
        //     trendDate: new Date(),
        //     geo: 'US'
        // }

        // const _testTrends = googleTrends.dailyTrends(query)



        return _testTrends
    },
}
