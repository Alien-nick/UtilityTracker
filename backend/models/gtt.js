const db = require('../db')

const Schema = db.mongoose.Schema

var gtt = new Schema({
  time: String,
  upload: String,
  download: String,
  uptime: String,
  unloaded: String,
  loaded: String,
  ipAddress: String,
  server: String
})

module.exports = db.mongoose.model('gtt', gpl)