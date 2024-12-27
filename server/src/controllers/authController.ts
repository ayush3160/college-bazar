import { NextFunction, Request, RequestHandler, Response } from 'express';
import User from '../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export type JWTPayload = {
    id: string;
    name: string;
};

export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { name, email, password, image } = req.body;

        const user = await User.findOne({ email });

        if (user) {
            res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ name, email, password: hashedPassword, image, cart: [] });

        await newUser.save();

        const payload: JWTPayload = { id: newUser._id.toString(), name: newUser.name };
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY || "some_secret_key");

        res.status(201).json({ message: 'User registered successfully', token });
    } catch (error) {
        console.error('Error: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            res.status(400).json({ message: 'Invalid email address' });
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            res.status(400).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ id: user._id, name: user.name }, process.env.JWT_SECRET_KEY || "some_secret_key");

        res.status(200).json({ message: 'User logged in successfully', token });
    } catch (error) {
        console.error('Error: ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}