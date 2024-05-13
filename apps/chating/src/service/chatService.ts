// services/chatService.js
import Chat from '../model/chat';
import User from '../../../social-media/src/model/userModel';
import io from "socket.io"

export const sendMessage = async (message) => {
    try {
        // Save message to database
        const savedMessage = await Chat.create(message);

        // Find recipient user by receiverId
        const recipient = await User.findOne({ _id: message.receiverId });

        // If recipient is online, emit the message to their socket
        if (recipient && recipient.socketId) {
            // Emit the message to recipient's socket using Socket.IO
            io.to(recipient.socketId).emit('chat', savedMessage);
        } else {
            // Handle case where recipient is offline
            console.log('Recipient is offline:', message.receiverId);
        }

        return savedMessage;
    } catch (error) {
        throw error;
    }
};
