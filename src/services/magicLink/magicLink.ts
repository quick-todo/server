import { Request, Response } from 'express'
import MagicLinkModel from '../../models/magicLink'
import UserModel from '../../models/user'
import { error, success } from '../../core/response'
import { getUniqueHash } from './helper'


export async function createMagicLink(req: Request, res: Response) {
  const { email } = req.body
  
  let user = await UserModel.findOne({ email })
  if (!user) {
    user = await UserModel.create({ email })
  }
  
  const hash = await getUniqueHash()
  const resp = await MagicLinkModel.create({ hash })
  
  return res.json(success(resp))
}

export async function generateAccessToken(req: Request, res: Response) {
  const { hash } = req.body
  const resp = await MagicLinkModel.findOne({ hash })
  if (resp) {
    return res.json(error({ message:'Invalid magic link hash' }))
  }
}