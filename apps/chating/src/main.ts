import { connectDB } from './config/db';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import express from 'express';
import { createServer } from 'http';
import * as ioClient from 'socket.io-client'; // Import socket.io-client library

dotenv.config();

const app = express();
const httpServer = createServer(app);
const PORT = process.env.PORT || 4000;

app.use(express.json());

// Handle GET request to the root route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the HTTP server
httpServer.listen(PORT, () => {
  console.log(`Socket server is running on port ${PORT}`);

  // Connect to the Socket.IO server using socket.io-client
  const socketClient = ioClient.connect(`http://localhost:${PORT}`);

  // Event listener for successful connection
  socketClient.on('connect', () => {
    console.log('Connected to Socket.IO server');
  });

  // Event listener for disconnection
  socketClient.on('disconnect', () => {
    console.log('Disconnected from Socket.IO server');
  });
});

connectDB().then(() => {
  const io = new Server(httpServer);

  io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
  });
});

















