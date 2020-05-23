const exec = require('child_process').exec
const dotenv = require('dotenv')
const cron = require('node-cron')
const gpl = require('./db')
dotenv.config()

// Set CRON to 1 minute
cron.schedule('* * * * * ', () => {
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
    gpl.create({
      status: power,
      time: new Date()
    }, (err, instance) => {
      if (err) return console.log(err)
    })

    if (error !== null) {
      output = stderr
      console.log('ERROR: ' + error)
    }
  })
})
