import { Schema, model } from 'mongoose'
import { User } from '@models/user'


export interface MagicLink {
  hash: string;
  password: string;
  user: User;
  createdAt: Date;
  updatedAt: Date;
}

const MagicLinkSchema = new Schema<MagicLink>({
  hash: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
}, {timestamps: true})

export default model<MagicLink>("MagicLink", MagicLinkSchema)
