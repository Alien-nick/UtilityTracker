const FastSpeedTest = require('fast-speedtest-api')
const cron = require('node-cron')
const dotenv = require('dotenv')
const moment = require('moment')
const gtt = require('../models/gtt')
dotenv.config()

// CRON Schedule

// cron.schedule('* * * * * *', () => {

    let speedtest = new FastSpeedTest({
        token: `${process.env.SPEED_TEST_API}`,
        unit: FastSpeedTest.UNITS.Mbps
    })

    speedtest.getSpeed().then(s => {
        console.log(`Speed: ${s} Mbps`)
    }).catch(e => {
        console.error(e.message)
    })

// })