import express, { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import authenticate from  '@middleware/authenticate'

import * as magicLink from '@services/magicLink/magicLink'

const router = express.Router()

router.post('/current-user', authenticate, asyncHandler((req: Request, res: Response) => {
  res.json(res.locals.user)
}))

router.post('/magic-link/generate', asyncHandler(magicLink.createMagicLink))
router.post('/magic-link/redeem', asyncHandler(magicLink.redeem))


export default router