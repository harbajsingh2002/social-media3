// controllers/FriendListController.ts
import { Request, Response } from 'express';
import {
    addFriendToList,
    getUserFriendList,
    deleteFriendFromList,
} from '../service/frinedlist';
import { SuccessMessage } from '../utils/enums/messageEnum';
import {
    failResponse,
    successResponse,
} from '../utils/commanFunction/response';
import { message, statusCode } from '../utils/commanFunction/constant';

// Add friend to friend list

async function addFriend(req: Request, res: Response): Promise<void> {
    try {
        const { userId, friendId } = req.body;
        await addFriendToList(userId, friendId);
        res.status(statusCode.success).json({
            success: true,
            message: SuccessMessage.FRIEND_ADDED,
        });
    } catch (error) {
        res
            .status(statusCode.badRequest)
            .json(
                failResponse(
                    statusCode.badRequest,
                    error.message,
                    message.somethingWrong
                )
            );
    }
}

// Get user's friend list

async function getFriendList(req: Request, res: Response): Promise<void> {
    try {
        const { userId } = req.params;
        const friendList = await getUserFriendList(userId);
        res.status(statusCode.success).json({
            success: true,
            message: SuccessMessage.FRIEND_LIST_RETRIEVED,
            friendList,
        });
    } catch (error) {
        res
            .status(statusCode.badRequest)
            .json(
                failResponse(
                    statusCode.badRequest,
                    error.message,
                    message.somethingWrong
                )
            );
    }
}

// delete friend from friendlist

async function deleteFriend(req: Request, res: Response): Promise<void> {
    try {
        const { userId, friendId } = req.params;
        await deleteFriendFromList(userId, friendId);
        res.status(statusCode.success).json({
            success: true,
            message: SuccessMessage.FRIEND_DELETED,
        });
    } catch (error) {
        res
            .status(statusCode.badRequest)
            .json(
                failResponse(
                    statusCode.badRequest,
                    error.message,
                    message.somethingWrong
                )
            );
    }
}
export { addFriend, getFriendList, deleteFriend };
