import { Request, Response } from 'express'
import MagicLinkModel from '@models/magicLink'
import UserModel, { User } from '@models/user'
import { getUniqueHash } from '@services/magicLink/helper'
import { success, error } from '@core/response'
import { signUserData } from '@core/jwt'


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

export async function redeem(req: Request, res: Response) {
  const { hash } = req.body
  const resp = await MagicLinkModel.findOne({ hash }).populate('user').exec()
  if (!resp) {
    return res.json(error('Invalid magic link hash'))
  }

  const user = resp.user
  const payload = signUserData({
    email: user?.email
  })

  return res.json(success(payload))
}