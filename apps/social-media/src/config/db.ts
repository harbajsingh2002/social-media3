import *  as mongoose from 'mongoose'
import * as dotenv from 'dotenv';
dotenv.config();
// import { MONGO_URI } from '../env';
const mongo = process.env.MONGO_URI;
console.log(mongo);
export const connectDB = async () => {
    try {
        await mongoose.connect(mongo);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}; 
