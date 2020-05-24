const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
var mongoDB = `${process.env.MONGO}`
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true })
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Define Schema
var Schema = mongoose.Schema
var gpl = new Schema({
  time: {
    type: Date, default: new Date()
  },
  status: String
})

module.exports = mongoose.model('gpl_logs', gpl)
