const exec = require('child_process').exec
const cron = require('node-cron')
const dotenv = require('dotenv')
const axios = require('axios')
const moment = require('moment')
const log = require('./db')
dotenv.config()

var slackNotification = null

// Set CRON to 1 minute
cron.schedule('* * * * * *', () => {
  var power
  // Check if there is power outage.
  var command = 'curl -s -u ' + `${process.env.USERNAME}` + ':' + `${process.env.PASSWORD}` + ' ' + `${process.env.URL}` + '| grep "var alarmList" | ' + "awk '{print $10}'"
  exec(command, (error, stdout, stderr) => {
    var output = stdout
    var str = output.substring(0, 2)
    if (str !== 'OK') {
      power = 'Outage'
    } else {
      power = 'Stable'
    }
    // Log to Database
    log.create({
      status: power,
      time: moment().format('MMMM Do YYYY, h:mm:ss')
    }, (err, instance) => {
      if (instance.status === 'Stable') {
        slackNotification = false
      } else if (instance.status === 'Outage') {
        if (slackNotification !== true) {
          slack()
          slackNotification = true
        }
      }
      if (err) return console.log(err)
    })

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
