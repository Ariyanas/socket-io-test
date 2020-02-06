const express = require('express')

const SERVER_PORT = process.env.SERVER_PORT || 5000

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile('index.html'))

app.listen(SERVER_PORT, () => console.log(`Server started at ${SERVER_PORT}`))