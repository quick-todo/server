import mongoose, { Schema } from 'mongoose'

export interface User {
  _id: Schema.Types.ObjectId;
  email: string;
}

const userSchema = new mongoose.Schema<User>({
  email: {
    type: String,
    required: true,
  },
}, {timestamps: true})

export default mongoose.model<User>("User", userSchema)
