require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./src/routes')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use(routes)


mongoose.connect(process.env.DB_CONNECTION_URL, {
  useNewUrlParser: "true",
})

mongoose.connection.on("error", err => {
  console.log("err", err)
})

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})
