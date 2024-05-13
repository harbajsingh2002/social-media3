// routes/chatRoutes.js
import express from 'express';
import { sendChatMessage } from '../controller/chatController';

const router = express.Router();

router.post('/send', sendChatMessage);

export default router;
