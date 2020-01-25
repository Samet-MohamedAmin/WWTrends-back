const Trend = require('../models/trends')


module.exports = {
    findAll() {
        return Trend.find()
    },

    store(trends) {
        const _trends = new Trend(trends).save()
        console.log('save trend - services')
        return _trends
    },
}
