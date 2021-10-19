import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'


export default function authenticate(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers
  if (!authorization) {
    return res.sendStatus(401)    
  }
  
  try {
    const token = authorization.split(' ')[1]
    const user = jwt.verify(token, process.env.JWT_SECRET)
    res.locals.user = user
    next()
  } catch (error) {
    return res.sendStatus(403)
  }
}