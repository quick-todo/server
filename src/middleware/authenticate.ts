import { error } from '@core/response'
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'


export default function authenticate(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers
  if (!authorization) {
    return res.status(401).json(error('Access token is required'))
  }
  
  try {
    const token = authorization.split(' ')[1]
    const user = jwt.verify(token, process.env.JWT_SECRET)
    res.locals.user = user
    next()
  } catch (err) {
    return res.status(403).json(error('Invalid access token'))
  }
}