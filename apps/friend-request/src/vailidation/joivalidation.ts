/*
 * @file: validators/joi.validator.js
 * @description: It contain validation function on request body, params and query.
 */

import joi from 'joi'

// Object schema validation
const deleteFriend = joi.object({
    userId: joi.string().required(),
    friendId: joi.string().required(),
})

const pending = joi.object({
    userId: joi.string().required(),
})

const accept = joi.object({
    requestId: joi.string().required(),
})

const create = joi.object({
    senderId: joi.string().required(),
    reciverId: joi.string().required(),
})
const addfriend = joi.object({
    userId: joi.string().required(),
    friendId: joi.string().required(),
})

const validationMiddleware = async (req: any, res: any, next: any, schema: string) => {
    const option = {
        abortEarly: false,
        allowUnknown: false,
    }


    if (schema == 'pending') {
        var { error } = pending.validate(req.params, option)
    }

    if (schema == 'accept') {
        var { error } = accept.validate(req.body, option)
    }

    if (schema == 'create') {
        var { error } = create.validate(req.body, option)
    }
    if (schema == 'addfriend') {
        var { error } = addfriend.validate(req.body, option)
    }
    if (schema == 'deleteFriend') {
        var { error } = deleteFriend.validate(req.params, option)
    }

    if (error) {
        res.status(400).json({ validationError: error.details[0].message })
    } else {
        next()
    }
}

export default validationMiddleware