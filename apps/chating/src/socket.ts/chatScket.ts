import { Server, Socket } from 'socket.io';
// import { Message } from '../common/types';
// import { chatService } from '../services/chatService';

export const initChatSocket = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log('a socket user connected');

    // socket.on('addUser', (userId: string) => {
    //   addUser(userId, socket.id);
    //   io.emit('getUsers', Object.keys(connectedUsers));
    // });

    // socket.on('disconnect', () => {
    //   removeUser(socket.id);
    //   io.emit('getUsers', Object.keys(connectedUsers));
    // });

    // socket.on('sendMessage', async ({ senderId, receiverId, text }: Message) => {
    //   await chatService.saveChat({ senderId, receiverId, text });
    //   const receiverSocketId = getUserSocket(receiverId);
    //   if (receiverSocketId) {
    //     io.to(receiverSocketId).emit('getMessage', { senderId, text });
    //   }
    // });

    // socket.on('userTyping', ({ senderId, isTyping }) => {
    //   socket.broadcast.emit('userTyping', { senderId, isTyping });
    // });
  });
};
