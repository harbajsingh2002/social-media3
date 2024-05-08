import express from 'express';
const router = express.Router();
import * as friendController from '../controller/sendRequest';
import auth from '../midlleware/auth';
import validationMiddleware from '../vailidation/joivalidation';

//  create friend request

router.post(
    '/create',
    (req, res, next) => validationMiddleware(req, res, next, 'create'),
    auth,
    friendController.sendRequest
);

// accept friend request

router.post(
    '/acceptRequest',
    (req, res, next) => validationMiddleware(req, res, next, 'accept'),
    auth,
    friendController.acceptFriendsRequest
);

// reject friend request

router.post(
    '/rejectRequest',
    (req, res, next) => validationMiddleware(req, res, next, 'accept'),
    auth,
    friendController.rejectFriendsRequest
);

// get pending friend request

router.get(
    '/getRequest/pending/userId',
    (req, res, next) => validationMiddleware(req, res, next, 'pending'),
    auth,
    friendController.getPendigsRequest
);

// get sent friend request

router.get(
    '/getRequest/sent/userId',
    (req, res, next) => validationMiddleware(req, res, next, 'pending'),
    auth,
    friendController.rejectFriendsRequest
);

export default router;
