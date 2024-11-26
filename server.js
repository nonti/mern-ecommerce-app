import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const PORT = process.env.PORT || 4000;


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
 .then(() => console.log('Connected to MongoDB ...')).catch(err => console.log(err));

// Middleware
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173/',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cache-Control', 'Expires', 'Pragma']
}));
app.use(cookieParser());

//Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
