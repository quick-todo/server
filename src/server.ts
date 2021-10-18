import { config } from 'dotenv'
config()

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes'

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use(routes)

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
