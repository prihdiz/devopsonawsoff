const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello RM338674 - FIAP23BPM')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
