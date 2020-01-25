const trends = require('../models/trends')


module.exports = {
    findAll() {
        return trends.find()
    },

    findByUserId(userId) {
        return trends.find({userId: userId})
    },

    countByUserId(userId) {
        return trends.countDocuments({userId: userId})
    },

    store(trends) {
        const _trends = new trends(trends).save()
        return _trends
    },

    clearCollection() {
        return trends.deleteMany({})
    }
}
