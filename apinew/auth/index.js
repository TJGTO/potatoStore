var express = require('express')
  , router = express.Router()


router.post('/login', require('./login'))


module.exports = router;