// //config
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
// app.use(express.json())
//
// var cors = require('cors');
// app.use(cors());
mongoose.connect(process.env.DATABASE_URL,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

app.use(express.json())

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', ()=> console.log('connected to database'))

const gasRouter = require('./routes/Gas-route')
app.use('/gas', gasRouter)

app.listen(5050,() => console.log('server started'))