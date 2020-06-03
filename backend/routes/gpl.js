var express = require('express')
var router = express.Router()
var gplController = require('../controllers/gplController')

router.route('/')
    .get(gplController.index)

router.route('/summary')
    .get(gplController.summary)

router.route('/charts')
    .get(gplController.charts)

router.route('/:date')
    .get(gplController.show)

module.exports = router