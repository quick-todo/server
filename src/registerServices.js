const express = require('express')
const asyncHandler = require('express-async-handler')
const router = express.Router()


const authService = require('./services/auth/auth')
router.post('/auth/login', asyncHandler(authService))


module.exports = router