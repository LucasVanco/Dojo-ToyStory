const express = require('express')
const fs = require('fs')
const morgan = require('morgan')
const cors = require('cors')
var bodyParser = require('body-parser')

const PORT = process.env.PORT || 3003
const DB_FILE = "toys.json"
const FILE_ENCODING = 'utf8'

const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

app.get('/toy', (req, res) => {
  fs.readFile(DB_FILE, FILE_ENCODING, (err, data) => {
    res.json(JSON.parse(data))
  })
})

app.post('/toy', (req, res) => {
  fs.readFile(DB_FILE, FILE_ENCODING, (err, data) => {
    let toys = JSON.parse(data)
    let toy = {
      name: req.body.name,
      image: req.body.image,
      description: req.body.description
    }
    toys.push(toy)
    fs.writeFile(DB_FILE, JSON.stringify(toys), (err) => {
      if (err) throw err
      res.sendStatus(201)
    })
  })
})

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT + '!')
})
