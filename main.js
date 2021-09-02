require('dotenv').config()
require('./db/connection')
const express = require('express')
const app = express()
const port = process.env.PORT

const eventRouter = require('./routes/eventRoutes')

app.use(express.json())
app.use(eventRouter)

app.listen(port, () => {
  console.log('Server is running on port ' + port)
})

const moment = require('moment-timezone');
const dateEurope = moment.tz(Date.now(), 'Europe/Berlin');
