const crypto = require('crypto')

function createHash() {
  return crypto.randomBytes(40).toString('hex')
}