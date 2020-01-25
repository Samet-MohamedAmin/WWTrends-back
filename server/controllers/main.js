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
            name: "test"
        }
        // trendsService.store(trends)

        const response = {'value': value}
        res.json(response)
    }
}