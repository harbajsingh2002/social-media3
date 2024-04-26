import mongoose from "mongoose";
import { Enum } from "../utils/enums/roleEnum";
import { v4 as uuid4 } from 'uuid';

const UserSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            default: () => uuid4()
        },
        username: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50,
            unique: false,
        },
        email: {
            type: String,
            required: true,
            maxlength: 100,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        profilePicture: {
            type: String,
            default: "",
        },
        coverPicture: {
            type: String,
            default: "",
        },
        followers: {
            type: [String],
            default: [],
        },
        followings: {
            type: [String],
            default: [],
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        desc: {
            type: String,
            maxlength: 50,
        },
        city: {
            type: String,
            maxlength: 50,
        },
        isDeleted: {
            type: Boolean,
            default: false
        },
        from: {
            type: String,
            maxlength: 50,
        },
        relationship: {
            type: Number,
            enum: Object.values(Enum),
        },
    },
    { timestamps: true }
);
const user = mongoose.model("User", UserSchema);
export default user;
