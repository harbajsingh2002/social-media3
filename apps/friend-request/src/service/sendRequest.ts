import friendRequest from '../model/sendRquest';
import { IFriendRequest } from '../utils/interface/ISendRequest';

//create friend request

const createFriendRequest = async (
    senderId: string,
    receiverId: string
): Promise<IFriendRequest> => {
    try {
        return await friendRequest.create({ senderId, receiverId });
    } catch (error) {
        throw new Error(error.message);
    }
};

// accept friend request

const acceptFriendRequest = async (
    requestId: string
): Promise<IFriendRequest | null> => {
    const friendRequests: IFriendRequest | null =
        await friendRequest.findByIdAndUpdate(
            requestId,
            { status: 'accepted' },
            { new: true }
        );
    return friendRequests;
};

// reject friend request

const rejectFriendRequest = async (
    requestId: string
): Promise<IFriendRequest | null> => {
    const friendRequests: IFriendRequest | null =
        await friendRequest.findByIdAndUpdate(
            requestId,
            { status: 'rejected' },
            { new: true }
        );
    return friendRequests;
};

// get pending friend request

const getPendingFriendRequests = async (
    userId: string
): Promise<IFriendRequest[]> => {
    const pendingRequests: IFriendRequest[] = await friendRequest
        .find({ receiverId: userId, status: 'pending' })
        .populate('senderId')
        .exec();
    return pendingRequests;
};

//get  sent  friend request

const getSentFriendRequests = async (
    userId: string
): Promise<IFriendRequest[]> => {
    const sentRequests: IFriendRequest[] = await friendRequest
        .find({ senderId: userId, status: 'pending' })
        .populate('receiverId')
        .exec();
    return sentRequests;
};
export {
    createFriendRequest,
    acceptFriendRequest,
    rejectFriendRequest,
    getPendingFriendRequests,
    getSentFriendRequests,
};
