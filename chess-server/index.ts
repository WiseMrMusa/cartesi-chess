import express from 'express';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  socket.on('join', () => {
    socket.broadcast.emit('opponentMove', { from: 'd2', to: 'd4' });
    console.log('Opponent Makes Move');
  });

  socket.on('move', ({ from, to }) => {
    socket.broadcast.emit('opponentMove', { from, to });
    console.log('Opponent Makes Move');
  });
});

server.listen(3001, () => {
  console.log('✔️ Server listening on port 3001');
});
