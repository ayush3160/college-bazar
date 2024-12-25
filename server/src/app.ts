import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database';
import userRouter from './routes/userRoutes';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use("/api/users", userRouter);

export default app;