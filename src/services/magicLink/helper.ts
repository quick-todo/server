import crypto from 'crypto'

import MagicLinkModel from '../../models/magicLink'

export async function getUniqueHash(): Promise<any> {
  const hash = crypto.randomBytes(40).toString('hex')
  const resp = await MagicLinkModel.findOne({hash})
  if (resp) {
    return getUniqueHash()
  }
  return hash
}

