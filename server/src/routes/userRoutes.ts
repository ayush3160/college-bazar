import express from 'express';
import { addProductToCart, getCartItemsOfUser, removeProductFromCart } from '../controllers/userController';

const userRouter = express.Router();

userRouter.post("/addToCart", addProductToCart);
userRouter.delete("/removeFromCart", removeProductFromCart);
userRouter.get("/cart", getCartItemsOfUser);

export default userRouter;