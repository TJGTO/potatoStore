var express = require('express')
  , router = express.Router()


router.use(require('./users'));
router.use(require('./auth'))

// router.use(require('./users'))

module.exports = router