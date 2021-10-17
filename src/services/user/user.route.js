const express = require('express')
const asyncHandler = require('express-async-handler')
const router = express.Router()

const userValidation = require('./user.validation')

router.post('/user/create', asyncHandler(require('./create')))

module.exports = router