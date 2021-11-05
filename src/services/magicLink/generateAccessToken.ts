import { Request, Response } from 'express'
import MagicLinkModel, { MagicLink } from '@models/magicLink'
import { success, error } from '@core/response'
import { signUserData } from '@core/jwt'
import { validate } from '@core/validator'
import Joi from 'joi'


function hashIsExpired(createdAt: Date): boolean {
  const hrs = 2 * (60 * 60 * 1000)
  return new Date(createdAt.getTime() + hrs) < new Date()
}



export async function generateAccessToken(req: Request, res: Response) {
  const { hash } = req.body
  const resp: MagicLink = await MagicLinkModel.findOne({ hash }).populate('user').exec()
  if (!resp) {
    return res.status(400).json(error('Invalid magic link hash'))
  }

  // hash is only valid for 2hrs
  if (hashIsExpired(resp.createdAt)) {
    return res.status(400).json(error('Magic link is expired'))
  }  
  
  const user = resp.user
  const payload = {
    email: user?.email
  }

  return res.json(success({
    accessToken: signUserData(payload)
  }))
}


export default {
  constrains: validate('body', {
    hash: Joi.string().required(),
  }),
  service: generateAccessToken,
}

