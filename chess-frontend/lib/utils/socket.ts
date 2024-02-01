const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)

import { Server } from 'socket.io'
const io = new Server(server, {
  cors: {
    origin: '*',
  },
})

io.on('connection', (socket) => {

    console.log("Hello")

  socket.on('join', () => {
    socket.broadcast.emit('opponentMove', {  from: 'd2' , to: 'd4' })
    console.log("Opponent Makes Move")
  })

  socket.on('canvas-state', (state) => {
    console.log('received canvas state')
    socket.broadcast.emit('canvas-state-from-server', state)
  })

  socket.on('draw-line', ({ prevPoint, currentPoint, color }: DrawLine) => {
    socket.broadcast.emit('draw-line', { prevPoint, currentPoint, color })
  })

  socket.on('clear', () => io.emit('clear'))
})

server.listen(3001, () => {
  console.log('✔️ Server listening on port 3001')
})