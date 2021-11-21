import express from 'express'
import asyncHandler from 'express-async-handler'
import authenticate from  '@middleware/authenticate'
import generateAccessToken from '@services/magicLink/generateAccessToken'
import createMagicLink from '@services/magicLink/createMagicLink'
import currentUser from '@services/miscellaneous/currentUser'
import todoCreate from '@services/todo/create'
import toggleCompleteStatus from '@services/todo/toggleCompleteStatus'
import todoRead from '@services/todo/read'
import todoDelete from '@services/todo/delete'

const router = express.Router()

 
// TODO: Rename to user/current
router.get('/current-user', authenticate, asyncHandler(currentUser.service))

router.post('/magic-link/create', createMagicLink.constrains, asyncHandler(createMagicLink.service))
router.post('/magic-link/generate-access-token', generateAccessToken.constrains, asyncHandler(generateAccessToken.service))



router.post('/todo/create', authenticate, todoCreate.constrains, asyncHandler(todoCreate.service))
router.get('/todo/read', authenticate, asyncHandler(todoRead.service))
router.post('/todo/delete', authenticate, todoCreate.constrains, asyncHandler(todoDelete.service))
router.post('/todo/toggle-complete-status', authenticate, toggleCompleteStatus.constrains, asyncHandler(toggleCompleteStatus.service))

export default router
