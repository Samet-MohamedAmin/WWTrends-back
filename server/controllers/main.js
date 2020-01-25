const trendsService = require('../services/trends')

module.exports = {

    test(req, res) {
        const response = {'test': 'work'}

        // trendsService.find(20)

        res.json(response)
    },
    testPost(req, res) {
        value = req.body.value
        console.log(value)

        trends = {
            lat: 30,
            lon: 50
        }
        // trendsService.store(trends)

        const response = {'value': value}
        res.json(response)
    }
}