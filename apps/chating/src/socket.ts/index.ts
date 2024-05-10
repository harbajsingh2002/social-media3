import { Server } from 'socket.io';
import { initChatSocket } from './chatScket';

export const initSockets = (io: Server) => {
    initChatSocket(io);
    // Add more socket modules here if needed

    
};
