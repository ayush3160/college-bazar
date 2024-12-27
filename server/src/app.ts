import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database';
import userRouter from './routes/userRoutes';
import authRouter from './routes/authRouter';
import authMiddleware from './utils/middleware';
import productRouter from './routes/productRoutes';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter, authMiddleware);
app.use("/api/product", productRouter, authMiddleware);

export default app;