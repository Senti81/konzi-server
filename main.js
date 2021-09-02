require('dotenv').config()
require('./db/connection')
const cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.PORT

const eventRouter = require('./routes/eventRoutes')

app.use(cors())
app.use(express.json())
app.use(eventRouter)

app.listen(port, () => {
  console.log('Server is running on port ' + port)
})
