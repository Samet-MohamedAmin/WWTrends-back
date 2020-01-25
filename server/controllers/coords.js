const coordsService = require('../services/coords')
const Coords = require('../models/coords')


module.exports = {

    async findAll(req, res) {
        coordsList = await coordsService.findAll()
        console.log(coordsList)
        res.json(coordsList)
    },

    async findByUserId(req, res) {
        const userId = req.params.userId.toLowerCase()
        coordsList = await coordsService.findByUserId(userId)
        res.json(coordsList)
    },

    async countByUserId(req, res) {
        const userId = req.params.userId.toLowerCase()
        const count = await coordsService.countByUserId(userId)
        res.json({count: count})
    },

    async save(req, res) {
        const coords = new Coords({...req.body, userId: req.body.userId.toLowerCase()})
        const _coords = await coordsService.store(coords)
        res.json(_coords)
    },
    
    async clearCollection(req, res) {
        const result = await coordsService.clearCollection()
        res.json(result)
    }
}
