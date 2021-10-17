const {Schema, model} = require("mongoose")

const MagicLinkSchema = new Schema({
  hash: {
    type: String,
    required: true,
  },
  isUsed: {
    type: Boolean, 
    default: false,
  },
  // updatedAt: {
  //   type: Date, 
  //   default: Date.now
  // },
  // createdAt: {
  //   type: Date, 
  //   default: Date.now
  // },
}, {timestamps: true})

module.exports = model("MagicLink", MagicLinkSchema)
