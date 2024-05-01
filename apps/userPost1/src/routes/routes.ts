import * as express from 'express';
const router = express.Router();
import postController from '../controller/postController';
import authenticate from '../../../social-media/src/middleware/auth';
import validationMiddleware from '../validations/joivalidation';

// create post

router.post(
    '/createPost',
    (req, res, next) => validationMiddleware(req, res, next, 'post'),
    authenticate,
    postController.createPostController
);

//update post
router.patch(
    '/updatePost/:id',
    (req, res, next) => validationMiddleware(req, res, next, 'post'),
    authenticate,
    postController.updatePostController
);

// delete post
router.delete(
    '/deletePost/:id',
    (req, res, next) => validationMiddleware(req, res, next, 'post'),
    authenticate,
    postController.deletePostController
);

// like dislike post
router.put(
    '/like/:id',
    (req, res, next) => validationMiddleware(req, res, next, 'post'),
    authenticate,
    postController.likeAndDislikeController
);

// get post by Id
router.get(
    '/getPost/:id',
    (req, res, next) => validationMiddleware(req, res, next, 'post'),
    authenticate,
    postController.getPostController
);

// get Timeline post
router.post(
    '/getTimelinePost/:username',
    (req, res, next) => validationMiddleware(req, res, next, 'post'),
    authenticate,
    postController.getTimelinePostsController
);

// get all posts
router.get(
    '/getAllPost',
    (req, res, next) => validationMiddleware(req, res, next, 'post'),
    authenticate,
    postController.getAllPostsController
);

export default router;
