/*
 * @file: validators/joi.validator.js
 * @description: It contain validation function on request body, params and query.
 * @author: Rajneshwar Singh
 */

import joi from 'joi'
import { Enum } from '../utils/enums/roleEnum'

// Object schema validation


const deleteUser = joi.object({
    userId: joi.string().required(),
})

const user = joi.object({
    _id: joi.string(),
    username: joi.string().min(3).max(50).required(),
    email: joi.string().email().max(100).required(),
    password: joi.string().min(6).required(),
    profilePicture: joi.string(),
    coverPicture: joi.string(),
    followers: joi.array().items(joi.string()),
    followings: joi.array().items(joi.string()),
    isAdmin: joi.boolean(),
    desc: joi.string().max(50),
    city: joi.string().max(50),
    isDeleted: joi.boolean(),
    from: joi.string().max(50),
    relationship: joi.number().valid(...Object.values(Enum)),
});

const login = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
})

const validationMiddleware = async (req: any, res: any, next: any, schema: string) => {
    const option = {
        abortEarly: false,
        allowUnknown: false,
    }

    if (schema == 'deleteUser') {
        var { error } = deleteUser.validate(req.body, option)
    }

    if (schema == 'user') {
        var { error } = user.validate(req.body, option)
    }

    if (schema == 'login') {
        var { error } = login.validate(req.body, option)
    }

    if (error) {
        res.status(400).json({ validationError: error.details[0].message })
    } else {
        next()
    }
}

export default validationMiddleware