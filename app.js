require('dotenv').config()
const { Sequelize } = require('sequelize');
const express = require('express')

const db = require("./models");

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


db.sequelize.sync({ alter: true }).then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})
