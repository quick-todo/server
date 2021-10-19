import mongoose from 'mongoose'

export interface User {
  email: string;
}

const userSchema = new mongoose.Schema<User>({
  email: {
    type: String,
    required: true,
  },
}, {timestamps: true})

export default mongoose.model<User>("User", userSchema)
