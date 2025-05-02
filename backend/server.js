
const PORT = process.env.PORT || 5000;

import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";


import { connectDB } from './config/connectDB.js';

const app = express();
dotenv.config();

connectDB();

app.use(cors());
app.use(cookieParser());    
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the careconnect backend API' });
});