import { Request, Response } from "express";
import User from "../models/userModel";

const getCartItemsOfUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user?.id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json(user.cart);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
}

const addProductToCart = async (req: Request, res: Response) => {
  try {
    const { productId } = req.body;

    await User.findByIdAndUpdate(req.user?.id, {
      $push: { cart: productId }
    });

    res.status(200).json({ message: "Product added to cart successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
}

const removeProductFromCart = async (req: Request, res: Response) => {
  try {
    const { productId } = req.body;

    await User.findByIdAndUpdate(req.user?.id, {
      $pull: { cart: productId }
    });

    res.status(200).json({ message: "Product removed from cart successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
}

export { getCartItemsOfUser, addProductToCart, removeProductFromCart };