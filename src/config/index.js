import dotenv from 'dotenv';
import { mongo } from 'mongoose';
import path from 'path';


dotenv.config({path: path.join(process.cwd(), '.env')});

export default {
    port: process.env.PORT || 5000,
    nodeEnv: process.env.NODE_ENV || 'development',
    mongoUrl: process.env.MONGO_URL,
}