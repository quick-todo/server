import { Schema, model, Document } from 'mongoose'
import { User } from '@models/user'


export interface MagicLink {
  hash: string;
  password: string;
  user: User;
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
