require('dotenv').config()
require('./db/connection')
const cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.PORT

const eventRouter = require('./routes/eventRoutes')
const userRouter = require('./routes/userRouter')

const bcrypt = require('bcryptjs')


app.use(cors())
app.use(express.json())
app.use(eventRouter)
app.use(userRouter)

app.listen(port, () => {
  console.log('Server is running on port ' + port)
})


// async function test() {
//   const pw = await bcrypt.hash('maus1234', 8)
//   console.log(pw)
// }

// test()