const express = require('express')


const app = express()





app.get('/', (req, res) => {
    res.send('Hello World! je suis')
  })


  app.listen(process.env.SERVER_PORT, () => {
    console.log(`Le serveur écoute le  port ${process.env.SERVER_PORT}`)
  })