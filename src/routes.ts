import express from 'express'
import asyncHandler from 'express-async-handler'
import * as magicLink from './services/magicLink/magicLink'

const router = express.Router()

router.post('/magic-link/generate', asyncHandler(magicLink.createMagicLink))


export default router