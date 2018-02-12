const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router()
const port = process.env.API_PORT || 3001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')

  res.setHeader('Cache-Control', 'no-cache')
  next()
})

router.post('/checklists', (req, res) => {
  console.log('received', res.body)
})

router.get('/checklists', (req, res) => {
  res.json([{
    id: 'id1',
    text: 'This is checklist item 1'
  }])
})

app.use('/api', router)

app.listen(port, () => {
  console.log(`api running on port ${port}`)
})
