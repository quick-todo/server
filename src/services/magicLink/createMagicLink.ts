import { Request, Response } from 'express'
import crypto from 'crypto'
import MagicLinkModel from '@models/magicLink'
import UserModel from '@models/user'
import { success } from '@core/response'
import { validate } from '@core/validator'
import Joi from 'joi'


export async function createMagicLink(req: Request, res: Response) {
  const { email } = req.body  
  let user = await UserModel.findOne({ email })
  if (!user) {
    user = await UserModel.create({ email })
  }
  
  const hash = await getUniqueHash()
  await MagicLinkModel.create({ hash, user: user._id })
  return res.json(success({hash}))
}

export async function getUniqueHash(): Promise<any> {
  const hash = crypto.randomBytes(40).toString('hex')
  const resp = await MagicLinkModel.findOne({hash})
  if (resp) {
    return getUniqueHash()
  }
  return hash
}

export default {
  constrains: validate('body', {
    email: Joi.string().email().required(),
  }),

  service: createMagicLink,
}