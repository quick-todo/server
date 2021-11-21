import { Request, Response } from 'express'
import { validatePostRequest } from '@core/validator'
import Joi from 'joi'
import todo from '@models/todo'
import { success, error } from '@core/response'

async function create(req: Request, res: Response) {
  const user = res.locals.user
  const { taskId } = req.body

  try {
    const item = await todo.findOne({_id: taskId, userId: user.id})
    if (item) {
      // toggle value
      await todo.updateOne({_id: item._id, }, {$set: {isCompleted: !item.isCompleted}})
    }    
    return res.json(success(true))
  } catch (e) {
    return res.status(400).json(error('Unable to toggle the record.'))
  }
}

export default {
  constrains: validatePostRequest({
    taskId: Joi.string().required(),
  }),
  service: create,
}
