import mongoose from "mongoose";
import { v4 as uuid4 } from 'uuid';

const chatSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => uuid4()
    },
    senderId: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    recieverId: {
        type: String,
        required: true
    },

}, { timestamps: true });

const chat = mongoose.model('chat', chatSchema);

export default chat;
