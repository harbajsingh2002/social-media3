

import express from 'express';
import { connectDB } from './config/db';
// import router from './route/sendFriendRoutes';
import dotenv from 'dotenv';
// import { Server } from 'http';
import io from 'socket.io-client';
import { createServer } from 'http';

dotenv.config();

const app = express();
const server = createServer(app);
const PORT = process.env.PORT;

app.use(express.json());
// app.use(router);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
      console.log('xtgqhvjq');


      const socket = io('http://localhost:4000');
      // Store connected socket IDs
      const connectedClients = new Set();

      // Handle connection
      socket.on('connection', () => {
        console.log('A user connected:', socket.id);

        // Store the socket ID
        connectedClients.add(socket.id);

        // Handle messages
        socket.on('message', (data) => {
          console.log('Message received:', data);

          // Retrieve a specific socket ID and send a message
          // const targetSocketId = 'socket_id_to_send_to';
          // if (connectedClients.has(targetSocketId)) {
          //   socket.to(targetSocketId).emit('message', data);
          // } else {
          //   console.log('Target socket not found');
          // }
        });

        // Handle disconnection
        socket.on('disconnect', () => {
          console.log('User disconnected:', socket.id);
          connectedClients.delete(socket.id);
        });
      });

      // Start server

      // io('http://localhost:4000');
      console.log(`Socket Server listening on port ${4000}`);
    });
  });






