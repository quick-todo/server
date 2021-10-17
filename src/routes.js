const express = require('express')
const asyncHandler = require('express-async-handler')
const router = express.Router()



router.post('/auth/login', asyncHandler(require('./services/auth/auth')))


module.exports = router