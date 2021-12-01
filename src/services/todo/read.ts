import { success } from "@core/response"
import todo from "@models/todo"
import { Request, Response } from "express"



async function read(req: Request, res: Response) {  
  const user = res.locals.user  
  const records = await todo.find({ user: user.id }).sort({ createdAt: -1 })
  const data = groupData(records)
  
  res.json(success(data))
}

function groupData(data: any) {
  const stub: any = {
    done: [],
    pending: [],
    hashtags: new Set(),
    taggedUsers: new Set(),
  }

  const ret = data.reduce((box: any, item: any) => {
    if (item.isCompleted) {
      box.done.push(item)
    }else{
      item.hashtags.forEach((tag: any) => box.hashtags.add(tag))
      item.taggedUsers.forEach((tag: any) => box.taggedUsers.add(tag))
      box.pending.push(item)
    }
    return box
  }, stub)

  ret.hashtags = Array.from(ret.hashtags)
  ret.taggedUsers = Array.from(ret.taggedUsers)

  return ret
}






export default {
  service: read,
}
