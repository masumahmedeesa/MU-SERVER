const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')

const app = express()

require('./configs/db')

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/public', express.static(path.join('public')))
app.use((request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,PATCH,DELETE,OPTIONS',
  )
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

const adminRoute = require('./routes/admin')
app.use('/admin', adminRoute)

app.use((request, response, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})
app.use((error, request, response, next) => {
  response.status(error.status || 500)
  response.json({
    error: {
      message: error.message,
    },
  })
})

module.exports = app
