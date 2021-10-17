const Joi = require('joi')
const { createValidator } = require('express-joi-validation')

function validateBody(rules) {
  return createValidator({ passError: true }).body(Joi.object(rules))
}

module.exports = {
  validateBody,
}