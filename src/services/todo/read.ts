import { success } from "@core/response"
import todo from "@models/todo"
import { Request, Response } from "express"


export function groupByCompleteStats(records: any) {
  const ret: Record<string, any> = {}
  for (const record of records) {
    const groupIndex = record.isCompleted ? 'completed' : 'pending'
    const curser = ret[groupIndex] || []
    curser.push(record)
    ret[groupIndex] = curser
  }
  return ret
}

async function read(req: Request, res: Response) {  
  const user = res.locals.user
  const records = await todo.find({ userId: user.id }).sort({ createdAt: -1 })
  // const response = groupByCompleteStats(records)
  
  res.json(success(records))
}


export default {
  service: read,
}
