// controllers/chatController.js
import { sendMessage } from '../service/chatService';

export const sendChatMessage = async (req, res) => {
    try {
        const message = req.body;
        const savedMessage = await sendMessage(message);
        res.status(200).json(savedMessage);
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
