import Joi from 'joi'
import validator from 'express-joi-validation'
import { query } from 'express'


type ValidationType = 'query' | 'params' | 'body'


export function validatePostRequest(rules: object): any {
  const validatorInit = validator.createValidator({ passError: true })
  return validatorInit.body(Joi.object(rules))
}


export function validate(index: ValidationType, rules: object): any {
  const schema = Joi.object(rules)
  const v = validator.createValidator({ passError: true })
  return v[index](schema)
}

// validate('body', {
//   name: ['string', 'required'],
//   xyz: ['string', 'required'],
// })

// type Rules = { body: object } | { params: object }

// export default {
//   rules: {
//     body: {
//       name: ['string', 'required'],
//       xyz: ['string', 'required'],
//     }
//   }
//   service,
// }