const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
var mongoDB = `${process.env.MONGO}`
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true })
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = {
  dotenv, mongoose
}