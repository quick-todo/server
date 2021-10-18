import Joi from 'joi'
import { createValidator } from 'express-joi-validation'


export function validateBody(rules: any) {
  return createValidator({ passError: true }).body(Joi.object(rules))
}
