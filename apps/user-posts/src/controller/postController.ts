import { message, statusCode } from '../utils/commonFunction/constant';
import { messageEnum } from '../utils/enums/messageEnum';
import {
    createPost,
    updatePost,
    deletePost,
    likeAndDislike,
    getPost,
    getTimelinePosts,
    getAllPosts,
} from '../services/postServices';
import logger from '../utils/logger/index'
import {
    failResponse,
    successResponse,
} from '../utils/commonFunction/response';
import { Request, Response } from 'express';



//create post

async function createPostController(req: Request, res: Response) {
    try {
        const newPost = await createPost(req.body);
        res.status(statusCode.success).json(successResponse(statusCode.success, messageEnum.POST_CREATED_SUCCESSFULL
        )),
            newPost
    } catch (err: any) {
        logger.error(message.errorLog('userList', 'userController', err))
        res
            .status(statusCode.badRequest)
            .json(
                failResponse(statusCode.badRequest, err.message, message.somethingWrong)
            );
    }
}

// update post

async function updatePostController(req: Request, res: Response) {
    try {
        const userId = req.params.id;
        const body = req.body;
        const updatedPost = await updatePost(userId, body);
        res.status(statusCode.success).json(successResponse(statusCode.success, messageEnum.POST_UPDATED_SUCCESSFULLY
        ))
    } catch (err: any) {
        logger.error(message.errorLog('userList', 'userController', err))
        res
            .status(statusCode.badRequest)
            .json(
                failResponse(statusCode.badRequest, err.message, message.somethingWrong)
            );
    }
}

//delete post

async function deletePostController(req: Request, res: Response) {
    try {
        const userId: any = req.params.id;
        const body = req.body;
        const deletedPost = await deletePost(userId, body);
        res.status(statusCode.success).json(successResponse(statusCode.success, messageEnum.POST_DELETE_SUCCESSFULLY
        )), deletedPost
    } catch (err: any) {
        logger.error(message.errorLog('userList', 'userController', err))
        res
            .status(statusCode.badRequest)
            .json(
                failResponse(statusCode.badRequest, err.message, message.somethingWrong)
            );
    }
}

//like and dislike  post

async function likeAndDislikeController(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const body = req.body;
        const post = await likeAndDislike(id, body);
        res.status(statusCode.success).json(successResponse(statusCode.success, messageEnum.POST_LIKE_DISLIKE
        )), post
    } catch (err: any) {
        logger.error(message.errorLog('userList', 'userController', err))
        res
            .status(statusCode.badRequest)
            .json(
                failResponse(statusCode.badRequest, err.message, message.somethingWrong)
            );
    }
}

// get post

async function getPostController(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const post = await getPost(id);
        res.status(statusCode.success).json(successResponse(statusCode.success, messageEnum.POST_HAS_BEEN_FATCH_SUCCESSFULL
        )), post
    } catch (err: any) {
        logger.error(message.errorLog('userList', 'userController', err))
        res
            .status(statusCode.badRequest)
            .json(
                failResponse(statusCode.badRequest, err.message, message.somethingWrong)
            );
    }
}

// get timeline

async function getTimelinePostsController(req: Request, res: Response) {
    try {
        const username = req.params.username;
        const posts = await getTimelinePosts(username);
        res.status(statusCode.success).json(successResponse(statusCode.success, messageEnum.TIMELINE_POST_FATCHING_FAILED
        )), posts
    } catch (err: any) {
        logger.error(message.errorLog('userList', 'userController', err))
        res
            .status(statusCode.badRequest)
            .json(
                failResponse(statusCode.badRequest, err.message, message.somethingWrong)
            );
    }
}

//get all post

async function getAllPostsController(req: Request, res: Response) {
    try {
        let page: string | undefined = req.query.page as string;
        let size: string | undefined = req.query.size as string;
        if (Array.isArray(page)) {
            page = page[0];
        }
        if (Array.isArray(size)) {
            size = size[0];
        }

        const pageNumber = parseInt(page || '1');
        const pageSize = parseInt(size || '10');

        const posts = await getAllPosts(pageNumber, pageSize);
        res.status(200).json(successResponse(statusCode.success, messageEnum.POST_HAS_BEEN_FATCH_SUCCESSFULL
        )),
            posts
    } catch (err: any) {
        logger.error(message.errorLog('userList', 'userController', err))
        res
            .status(statusCode.badRequest)
            .json(
                failResponse(statusCode.badRequest, err.message, message.somethingWrong)
            );
    }
}
export default {
    createPostController,
    updatePostController,
    deletePostController,
    likeAndDislikeController,
    getPostController,
    getTimelinePostsController,
    getAllPostsController,
};
