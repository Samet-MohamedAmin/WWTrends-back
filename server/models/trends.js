const mongoose = require('mongoose')

mongoose.Promise = Promise

const Schema = mongoose.Schema

const trendsSchema = Schema({
    name: {type: String, required: true, default: 'unknown'},
    timestamp: {type: Number, required: false}
})

const Trends = mongoose.model('trends', trendsSchema)

module.exports = Trends
