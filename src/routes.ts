import express, { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import authenticate from  '@middleware/authenticate'

import * as magicLink from '@services/magicLink/magicLink'
import { success } from '@core/response'

const router = express.Router()

router.get('/current-user', authenticate, asyncHandler((req: Request, res: Response) => {
  res.json(success(res.locals.user))
}))

router.post('/magic-link/create', asyncHandler(magicLink.createMagicLink))
router.post('/magic-link/generate-access-token', asyncHandler(magicLink.generateAccessToken))


export default router