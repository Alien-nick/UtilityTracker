const gpl = require('../models/gpl')
const Response = require('http-status-code')

module.exports = {
    index: async (req, res, next) => {
        var perPage = 10
        var page = req.params.page || 1
        gpl
            .find({})
            .skip((perPage * page) - perPage)
            .limit(perPage)
            .exec((err, logs) => {
                gpl.count().exec((err, count) => {
                    err ? next(err) :
                    // TODO: Recheck Response Constant
                    res.status(200).json({
                        logs: logs,
                        current: page,
                        pages: Math.ceil(count / perPage) 
                    })
                })
            })
    },

    summary: async (req, res, next) => {
        gpl.find({power: false}).countDocuments((err, outage) => {
            avgVolt = gpl.aggregate([{
                $group: {
                    _id: "$voltage",
                    volt: {$avg: "$voltage"}
                }
            }], (err, avg) => {
                err ? res.send(err) : 
                   res.status(200).json({
                        outages: outage,
                        voltage: avg[0]['volt']
                    })
            })
        })
    },

    charts: async (req, res, next) => {
        gpl.find({}, (err, result) => {
            err ? res.send(err) : res.json(result)
        })
    },

    show: async (req, res, next) => {
        gpl.find({date: { $regex: '.*' + req.params.date + '*.'}}, (err, date) => {
            err ? res.send(Err) : res.status(200).json(date[0])
        })
    }
}