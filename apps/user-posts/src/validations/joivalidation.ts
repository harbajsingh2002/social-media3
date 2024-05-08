/*
 * @file: validators/joi.validator.js
 * @description: It contain validation function on request body, params and query.
 */

import * as joi from 'joi'

// Object schema validation

const Post = joi.object({
    _id: joi.string(),
    userId: joi.string().required(),
    desc: joi.string().max(500),
    img: joi.string(),
    likes: joi.array().items(joi.string()),
});

const validationMiddleware = async (req: any, res: any, next: any, schema: string) => {
    const option = {
        abortEarly: false,
        allowUnknown: false,
    }
    if (schema == 'Post') {
        var { error } = Post.validate(req.body, option)
    }

    if (error) {
        res.status(400).json({ validationError: error.details[0].message })
    } else {
        next()
    }
}

export default validationMiddleware