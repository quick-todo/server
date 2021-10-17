const MagicLinkModel = require('../../models/magicLink')
const MagicLinkModel = require('../../models/user')

const crypto = require('crypto')


module.exports = async (req, res) => {
  const { email } = req.body
  
  let user = await UserModel.findOnce({ email })
  if (!user) {
    user = await UserModel.create({ email })
  }
  
  const hash = await getUniqueHash()
  const resp = await MagicLinkModel.create({ hash })
  
  return res.json(resp)
}

function getUniqueHash() {
  const hash = crypto.randomBytes(40).toString('hex')
  const resp = await MagicLinkModel.findOne({hash})
  if (resp) {
    return getUniqueHash();
  }
  return hash
}