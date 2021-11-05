import { config } from 'dotenv'
config()

import express, { NextFunction, Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes'
import { error } from '@core/response'

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use(routes)

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err)
  }

  if (err && err.error && err.error.isJoi) {
    // joi error
    return res
      .status(400)
      .json(error(err.error.details.map((obj: any) => obj.message)))
  }

  return res.status(500).json(error(err.message))
})

mongoose.connect(process.env.DB_CONNECTION_URL || '')

mongoose.connection.on("error", err => {
  console.log("err", err)
})

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})
