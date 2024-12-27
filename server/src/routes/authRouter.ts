import express from 'express';
import { register, login } from '../controllers/authController';
import uploadMulter from '../utils/multer';

const authRouter = express.Router();

authRouter.post('/register', register, uploadMulter.single('image'));
authRouter.post('/login', login);

export default authRouter;