import { Request, Response } from 'express'
import { validatePostRequest } from '@core/validator'
import Joi from 'joi'
import todo from '@models/todo'
import { success, error } from '@core/response'
import { Tokenizer } from '@core/tokenizer'

async function create(req: Request, res: Response) {
  const user = res.locals.user
  const { task } = req.body

  const tokens = new Tokenizer(task)
  const hashtags = tokens.getHashTags().map(token => token.value)
  const taggedUsers = tokens.getTaggedUsers().map(token => token.value)
  
  try {
    const record = await todo.create({
      task: task,
      user: user.id,
      hashtags: Array.from(new Set(hashtags)),
      taggedUsers: Array.from(new Set(taggedUsers))
    })
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
