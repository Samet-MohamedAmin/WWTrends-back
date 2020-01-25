const coordsService = require('../services/coords')

module.exports = {

    test(req, res) {
        const response = {'test': 'work'}

        coordsService.find(20)

        res.json(response)
    },
    testPost(req, res) {
        value = req.body.value
        console.log(value)

        coords = {
            lat: 30,
            lon: 50
        }
        coordsService.store(coords)

        const response = {'value': value}
        res.json(response)
    }
}