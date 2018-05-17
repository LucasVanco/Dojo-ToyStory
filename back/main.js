const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
var bodyParser = require('body-parser')

const PORT = process.env.PORT || 3003

const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT + '!')
})
