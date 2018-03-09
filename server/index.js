const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(passport.initialize())

require('./authentication')(passport)

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  next()
})

require('./routes')(app, passport)

app.get('*', (req, res) =>
  res.status(200).send({
    message: 'The HomesInOne API is active.'
  })
)

module.exports = app
