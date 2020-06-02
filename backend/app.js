const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 27000
var gplRouter = require('./routes/gpl')

app.use(cors())
app.use(bodyParser.json())
app.use('/powerlogs', gplRouter)
app.use('/powerlogs/summary', gplRouter)
app.use('/powerlogs/charts', gplRouter)

app.listen(PORT, () => {
  console.log('Server is running on: ' + 27000)
})
