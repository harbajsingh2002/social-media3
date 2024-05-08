import { Request, Response } from 'express';
import {
    createFriendRequest,
    acceptFriendRequest,
    rejectFriendRequest,
    getPendingFriendRequests,
    getSentFriendRequests,
} from '../service/sendRequest';
import { ErrorMessage } from '../utils/enums/errorMessageEnums';
import { SuccessMessage } from '../utils/enums/messageEnum';
import StatusCodeEnum from '../utils/enums/statusCodeEnums';
import {
    failResponse,
    successResponse,
} from '../utils/commanFunction/response';
import { message, statusCode } from '../utils/commanFunction/constant';

// send friend request

async function sendRequest(req: Request, res: Response): Promise<void> {
    try {
        const { senderId, receiverId } = req.body;
        const friendRequest = await createFriendRequest(senderId, receiverId);
        res.json(
            successResponse(statusCode.success, SuccessMessage.FRIEND_REQUEST_SENT)
        ),
            friendRequest;
    } catch (err: any) {
        res
            .status(statusCode.badRequest)
            .json(
                failResponse(statusCode.badRequest, err.message, message.somethingWrong)
            );
    }
}

// accept friend request

async function acceptFriendsRequest(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { requestId } = req.body;
        const friendRequest = await acceptFriendRequest(requestId);
        if (!friendRequest) {
            res
                .status(StatusCodeEnum.NOT_FOUND)
                .json(
                    failResponse(
                        statusCode.badRequest,
                        ErrorMessage.FRIEND_REQUEST_NOT_FOUND
                    )
                );
            return;
        }
        res.json(
            successResponse(
                statusCode.success,
                SuccessMessage.FRIEND_REQUEST_ACCEPTED
            )
        ),
            friendRequest;
    } catch (err: any) {
        res
            .status(statusCode.badRequest)
            .json(
                failResponse(statusCode.badRequest, err.message, message.somethingWrong)
            );
    }
}

// reject friend request

async function rejectFriendsRequest(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { requestId } = req.body;
        const friendRequest = await rejectFriendRequest(requestId);
        if (!friendRequest) {
            res
                .status(StatusCodeEnum.NOT_FOUND)
                .json(
                    failResponse(
                        statusCode.badRequest,
                        ErrorMessage.FRIEND_REQUEST_NOT_FOUND
                    )
                );
            return;
        }
        res.json(
            successResponse(
                statusCode.success,
                SuccessMessage.FRIEND_REQUEST_REJECTED
            )
        ),
            friendRequest;
    } catch (err: any) {
        res
            .status(statusCode.badRequest)
            .json(
                failResponse(statusCode.badRequest, err.message, message.somethingWrong)
            );
    }
}

// get pending friend requests

async function getPendigsRequest(req: Request, res: Response): Promise<void> {
    try {
        const { userId } = req.params;
        const pendingRequests = await getPendingFriendRequests(userId);
        res.json(
            successResponse(statusCode.success, SuccessMessage.FRIEND_REQUEST_SENT)
        ),
            pendingRequests;
    } catch (err: any) {
        res
            .status(statusCode.badRequest)
            .json(
                failResponse(statusCode.badRequest, err.message, message.somethingWrong)
            );
    }
}

// get sent friend requests

async function getSentFriendRequest(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { userId } = req.params;
        const sentRequests = await getSentFriendRequests(userId);
        res.json(
            successResponse(statusCode.success, SuccessMessage.FRIEND_REQUEST_SENT)
        ),
            sentRequests;
    } catch (err: any) {
        res
            .status(statusCode.badRequest)
            .json(
                failResponse(statusCode.badRequest, err.message, message.somethingWrong)
            );
    }
}

export {
    sendRequest,
    acceptFriendsRequest,
    rejectFriendsRequest,
    getPendigsRequest,
    getSentFriendRequest,
};
