const mongoose = require('mongoose')

mongoose.Promise = Promise

const Schema = mongoose.Schema

const trendsSchema = Schema({
    userId: {type: String, required: true, default: 'unknown'},
    lat: {type: Number, required: true},
    lon: {type: Number, required: true},
    acc: {type: Number, required: false},
    timestamp: {type: Number, required: false}
})

const trends = mongoose.model('trends', trendsSchema)

module.exports = trends
