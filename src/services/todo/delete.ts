import { Request, Response } from 'express'
import { validatePostRequest } from '@core/validator'
import Joi from 'joi'
import todo from '@models/todo'
import { success, error } from '@core/response'

async function create(req: Request, res: Response) {
  const user = res.locals.user
  const { taskId } = req.body
  try {
    await todo.deleteOne({_id: taskId, userId: user.id })
    return res.json(success(true))
  } catch (e) {
    return res.status(400).json(error('Unable to delete the record'))
  }
}

export default {
  constrains: validatePostRequest({
    taskId: Joi.string().required(),
  }),
  service: create,
}
