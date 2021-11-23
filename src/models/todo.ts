import { Schema, model } from 'mongoose'

export interface Todo {
  task: string
  isCompleted: boolean
  user: Schema.Types.ObjectId
  hashtags: Array<String>
  taggedUsers: Array<String>
  createdAt: Date
  updatedAt: Date
}

const TodoSchema = new Schema<Todo>({
  task: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  hashtags: {
    type: [String],
    required: true
  },
  taggedUsers: {
    type: [String],
    required: true
  },
}, {timestamps: true})

export default model<Todo>('Todo', TodoSchema)
