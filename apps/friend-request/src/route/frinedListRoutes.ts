import express from 'express';
const router = express.Router();
import * as FriendListController from '../controller/friendlist';
import auth from '../midlleware/auth';
import validationMiddleware from '../vailidation/joivalidation';

// add friend in friend list

router.post(
    '/addfriend',
    (req, res, next) => validationMiddleware(req, res, next, 'create'),
    auth,
    FriendListController.addFriend
);

// get frined from friend list

router.get(
    '/getfriendlist/:id',
    (req, res, next) => validationMiddleware(req, res, next, 'create'),
    auth,
    FriendListController.getFriendList
);

//delete friend from friend list

router.delete(
    '/friends/:userId/:friendId',
    (req, res, next) => validationMiddleware(req, res, next, 'create'),
    auth,
    FriendListController.deleteFriend
);
