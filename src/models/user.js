const {Schema, model, UUID} = require("mongoose")

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
})

module.exports = model("User", userSchema)
