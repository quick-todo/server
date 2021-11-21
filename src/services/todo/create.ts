import { Request, Response } from 'express'
import { validatePostRequest } from '@core/validator'
import Joi from 'joi'
import todo from '@models/todo'
import { success, error } from '@core/response'

async function create(req: Request, res: Response) {
  const user = res.locals.user
  const { task } = req.body

  try {
    const record = await todo.create({task, userId: user.id })
    return res.json(success(record))    
  } catch (e) {
    return res.status(400).json(error('Unable to create the record'))
  }
}

export default {
  constrains: validatePostRequest({
    task: Joi.string().required(),
  }),
  service: create,
}
