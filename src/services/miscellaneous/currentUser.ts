import { Request, Response } from 'express'
import { success } from '@core/response'


export async function createMagicLink(req: Request, res: Response) {
  res.json(success(res.locals.user))
}

export default {
  service: createMagicLink,
}
