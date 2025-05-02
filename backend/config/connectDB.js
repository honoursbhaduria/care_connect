
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
export const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Database connected successfully")
        console.log("Mongo URI:", process.env.MONGO_URI);
    }).catch((e)=>{
        console.log(e)
        console.log("Database connection failed")
        console.log("Mongo URI:", process.env.MONGO_URI);

    })
}

