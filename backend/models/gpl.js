const db = require('../db')
const Schema = db.mongoose.Schema

var gpl = new Schema({
  time: String,
  power: Boolean,
  voltage: Number,
  amps: String,
  temperature: String
})

module.exports = db.mongoose.model('gpl', gpl)