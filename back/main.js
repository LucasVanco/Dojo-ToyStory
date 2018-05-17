const express = require('express')

const PORT = process.env.PORT || 3003

const app = express()


app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT + '!')
})
