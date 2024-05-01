import ITokenDetails from '../commonFunction/ITokenDetails';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken';
// import { JWT_SECRET } from '../../env';

dotenv.config()

export default class CommonFunction {
    private bcryptInstance: typeof bcrypt;
    private jwtInstance: typeof jwt;

    constructor(bcryptInstance: typeof bcrypt, jwtInstance: typeof jwt) {
        this.bcryptInstance = bcryptInstance;
        this.jwtInstance = jwtInstance;
    }

    async comparePassword(password: string, userPassword: string) {
        try {
            const matchPassword: boolean = await this.bcryptInstance.compare(
                password,
                userPassword
            );
            return matchPassword;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    async generateToken(data: ITokenDetails) {
        try {
            const secret: string = process.env.JWT_SECRET;
            const token: string = await this.jwtInstance.sign(data, secret, {
                expiresIn: 1000,
            });
            return token;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    async hashPassword(plainPassword: string) {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        return bcrypt.hashSync(plainPassword, salt);
    }
}
