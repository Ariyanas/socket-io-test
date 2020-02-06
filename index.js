const express = require('express')

const SERVER_PORT = process.env.SERVER_PORT || 5000

const app = express()

const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile('index.html'))

// Socket IO setup
io.on('connection', (socket) => {
    console.log('Client connected')

    socket.on('join', (data) => {
        console.log(data)
        socket.emit('messages', 'Greetings!')
    })

    socket.on('disconnect', () => console.log('Client disconnected'))
})

// app.listen(SERVER_PORT, () => console.log(`Server started at ${SERVER_PORT}`))
server.listen(SERVER_PORT, () => console.log(`Server started at ${SERVER_PORT}`))