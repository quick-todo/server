import userModel from '@models/user'

export default async (req: any, res: any) => {
  const { email } = req.body
  let user = await userModel.findOne({ email })
  if (!user) {
    user = await userModel.create({ email })
  }
  
  res.json({ status: true })
}