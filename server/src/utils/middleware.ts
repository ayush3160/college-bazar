import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWTPayload } from '../controllers/authController';

export interface MiddlewareRequest extends Request {
    user: JWTPayload;
}

const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.header('x-auth-token');
    if (!token) {
        res.status(401).json({ message: 'No token, authorization denied' });
        return;
    };

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY || "some_secret_key");
        req.user = decoded as JWTPayload;
        next();
    } catch (error) {
        console.error('Error: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export default authMiddleware;