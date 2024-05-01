
import FriendList from '../model/friendList';
import { FriendListItem } from '../utils/interface/IFriendList';

// Add friend to friend list

const addFriendToList = async (userId: string, friendId: string): Promise<void> => {
    try {
        await FriendList.create({ userId, friendId });
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get user's friend list

const getUserFriendList = async (userId: string): Promise<FriendListItem[]> => {
    try {
        return await FriendList.find({ userId }).populate('friendId', 'name');
    } catch (error) {
        throw new Error(error.message);
    }
};

// delete friend  fromfriend list

const deleteFriendFromList = async (userId: string, friendId: string): Promise<void> => {
    try {
        await FriendList.deleteOne({ userId, friendId });
    } catch (error) {
        throw new Error(error.message);
    }
};
export { addFriendToList, getUserFriendList, deleteFriendFromList };
