import mongoose from 'mongoose'

const MagicLinkSchema = new mongoose.Schema({
  hash: {
    type: String,
    required: true,
  },
  isUsed: {
    type: Boolean, 
    default: false,
  },
}, {timestamps: true})

export default mongoose.model("MagicLink", MagicLinkSchema)
