import { Schema, model } from 'mongoose'

export interface Todo {
  task: string;
  isCompleted: boolean;
  user: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
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
    ref: "User"
  },
}, {timestamps: true})

export default model<Todo>('Todo', TodoSchema)
