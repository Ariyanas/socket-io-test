const express = require('express')

const SERVER_PORT = process.env.SERVER_PORT || 5000

const app = express()

app.get('/', (req, res) => res.send('Hello test'))

app.listen(SERVER_PORT, () => console.log(`Server started at ${SERVER_PORT}`))