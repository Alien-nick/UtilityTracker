const exec = require('child_process').exec
const cheerio = require('cheerio')
const cron = require('node-cron')
const dotenv = require('dotenv')
const moment = require('moment')
const axios = require('axios')
const log = require('./db')
dotenv.config()

var slackNotification = null

// Set CRON to 1 minute
cron.schedule('* * * * *', () => {
  var power
  // Check if there is power outage.
  var command = 'curl -s -u ' + `${process.env.USERNAME}` + ':' + `${process.env.PASSWORD}` + ' ' + `${process.env.URL}` + 'zhninfo.html' + ' ' + '| grep "var alarmList" | ' + "awk '{print $10}'"

  exec(command, (error, stdout, stderr) => {
    var output = stdout
    console.log(slackNotification)
    var str = output.substring(0, 2)
    if (str !== 'OK') {
      power = false
      if (slackNotification !== true) {
        slack()
        slackNotification = true
      }
    } else {
      power = true
      slackNotification = false
    }
    console.log('power: ', power)
    store(power)
    if (error !== null) {
      output = stderr
      console.log('ERROR: ' + error)
    }
  })
})

var slack = () => {
  axios.post(`${process.env.SLACK_WEBHOOK}`, {
    text: `${process.env.NAME}` + ' encountered a power outage at ' + new Date()
  })
}

var store = (power) => {
  axios.get(`${process.env.URL}` + 'zhngponstatus.html', {
    auth: {
      username: `${process.env.USERNAME}`,
      password: `${process.env.PASSWORD}`
    }
  }).then((response) => {
    const $ = cheerio.load(response.data)
    var volts = $('#table1 > tbody:nth-child(2) > tr:nth-child(9) > td:nth-child(2)').text()
    var amps = $('#table1 > tbody:nth-child(2) > tr:nth-child(7) > td:nth-child(2)').text()
    var temp = $('#table1 > tbody:nth-child(2) > tr:nth-child(8) > td:nth-child(2)').text()

    // Log to Database
    log.create({
      power: power,
      time: moment().format('MMMM Do YYYY, h:mm:ss'),
      voltage: parseFloat(volts),
      amps: parseFloat(amps),
      temperature: temp
    }, (err, instance) => {
      if (err) console.log('error: ', err)
    })
  }).catch((err) => {
    console.log(err)
  })
}
