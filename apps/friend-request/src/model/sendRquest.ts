import mongoose from "mongoose";
import { Enum } from "../utils/enums/roleEnum"
import { v4 as uuid4 } from 'uuid';


const UserSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            default: () => uuid4()
        },
        senderId: {
            type: String,
            required: true
        },
        receiverId: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: Object.values(Enum),
            default: 'pending'
        }
    },
    { timestamps: true }
)
const friendRequest = mongoose.model('friendRequest', UserSchema);
export default friendRequest;