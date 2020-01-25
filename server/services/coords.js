const Coords = require('../models/coords')


module.exports = {
    findAll() {
        return Coords.find()
    },

    findByUserId(userId) {
        return Coords.find({userId: userId})
    },

    countByUserId(userId) {
        return Coords.countDocuments({userId: userId})
    },

    store(coords) {
        const _coords = new Coords(coords).save()
        return _coords
    },

    clearCollection() {
        return Coords.deleteMany({})
    }
}
