const { validateBody } = require('../../core/util')
const Joi = require('joi')


const create = validateBody({
  email: Joi.string().email().required()
})

module.exports = {
  create,
}

