const userModel = require('./user.model')

module.exports = async (req, res) => {
  const { email } = req.body
  let user = await userModel.findOne({ email })
  if (!user) {
    user = await userModel.create({ email })
  }
  
  res.json({ status: true })
}