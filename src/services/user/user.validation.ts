import { validateBody } from '../../core/util'
import Joi from 'joi'


export const create = validateBody({
  email: Joi.string().email().required()
})
