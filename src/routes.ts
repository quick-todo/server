import express from 'express'
import asyncHandler from 'express-async-handler'
import authenticate from  '@middleware/authenticate'
import generateAccessToken from '@services/magicLink/generateAccessToken'
import createMagicLink from '@services/magicLink/createMagicLink'
import currentUser from '@services/miscellaneous/currentUser'

const router = express.Router()

 
router.get('/current-user', authenticate, asyncHandler(currentUser.service))

router.post('/magic-link/create', 
  createMagicLink.constrains, 
  asyncHandler(createMagicLink.service)
)

router.post('/magic-link/generate-access-token', 
  generateAccessToken.constrains, 
  asyncHandler(generateAccessToken.service)
)

export default router