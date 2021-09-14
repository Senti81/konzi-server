require('dotenv').config()
require('./db/connection')
const cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.PORT

const eventRouter = require('./routes/eventRoutes')
const userRouter = require('./routes/userRouter')

app.use(cors())
app.use(express.json())
app.use(eventRouter)
app.use(userRouter)

app.get('*', (req, res) =>{
  res.status(404).json(
    {
      error: 404,
      message: "Site not found"
    }
  );
});

app.listen(port, () => {
  console.log('Server is running on port ' + port)
})