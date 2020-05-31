const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 4001;
const router = express.Router()
const powerlogs = require('./db')

app.use(cors())
app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log('Server is running on: ' + PORT)
})

app.use('/powerlogs/:id', router)
app.use('/powerlogs', router)
// app.use('/', router)

router.get('powerlogs/:id', (req, res) => {
    powerlogs.find({_id: req.params.id}, (err, date) => {
        if(err) {
            res.send(Err)
        }
        console.log(date[0])
    })
})

router.get('/powerlogs', (req, res) => {
    powerlogs.find((err, logs) => {
        if (err) {
            res.send(err)
        } else {
            res.json(logs)
        }
    })
})

// router.get('/', (req, res) => {
//     res.json('Test')
// })

module.exports = router