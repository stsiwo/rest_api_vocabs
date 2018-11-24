var express = require('express')
var app = express()

app.get('/api/', function (req, res) {
  res.json({ name: "satoshi" });
})

app.listen(3000)
