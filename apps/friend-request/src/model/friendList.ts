import mongoose from "mongoose";
import { v4 as uuid4 } from 'uuid';

const FriendListSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => uuid4()
    },
    userId: {
        type: String,
        required: true
    },
    friendId: {
        type: String,
        required: true
    }
}, { timestamps: true });

const FriendList = mongoose.model('FriendList', FriendListSchema);

export default FriendList;
