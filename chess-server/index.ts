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

  socket.on('join', () => {
    socket.broadcast.emit('opponentMove', {  from: 'd2' , to: 'd4' })
    console.log("Opponent Makes Move")
  })
  socket.on('move', ({ from, to}) => {
    socket.broadcast.emit('opponentMove', {  from , to })
    console.log("Opponent Makes Move")
  })
  
})

server.listen(3001, () => {
  console.log('✔️ Server listening on port 3001')
})