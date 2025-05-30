
const PORT = process.env.PORT || 5000;

import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from './routes/auth.routes.js';
import helpRoutes from './routes/help.routes.js';
import ngoRoutes from './routes/ngo.routes.js';


import { connectDB } from './config/connectDB.js';

const app = express();
dotenv.config();

connectDB();

app.use(cors());
app.use(cookieParser());    
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//ROUTES
app.use('/api/auth', authRoutes);
app.use('/api/help', helpRoutes);
app.use('/api/ngo', ngoRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the careconnect backend API' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});