import { IUser } from '../utils/interface/Iuser';
import jwt, { JwtPayload, decode } from 'jsonwebtoken';
import { Response } from 'express';
import { IncomingHttpHeaders } from 'http';
import dotenv from "dotenv"
dotenv.config();

export const extractBearerToken = (headers?: IncomingHttpHeaders): string | undefined => {
    let token;
    if (headers) {
        const rawAuthorization = headers.authorization;
        if (
            rawAuthorization &&
            typeof rawAuthorization === 'string' &&
            rawAuthorization.startsWith('Bearer ')
        ) {
            token = rawAuthorization.split('Bearer ')[1];
        }
    }
    return token;
};

// Define type for req.headers
interface CustomRequest {
    headers?: IncomingHttpHeaders; // Use IncomingHttpHeaders type for headers
    user?: IUser;
    authorization?: string;
}

export default async function authenticate(
    req: CustomRequest, // Use CustomRequest type
    res: Response,
    next: () => void,
) {

    try {
        const token = extractBearerToken(req?.headers);
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized', code: 401 });
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
        req.user = {
            id: decode?.id as string, // Safely access 'id' property
            username: decode?.username,
            email: decode?.email,
            password: decode?.password


        };
        return next();
    } catch (error: any) {
        return res.status(401).json({ message: error.message, error: 'Unauthorized', code: 401 });
    }
}
