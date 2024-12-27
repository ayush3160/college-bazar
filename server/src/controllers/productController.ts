import { Request, Response, NextFunction } from "express";
import Product from "../models/productModel";

const getAllProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        res.json({ message: 'All products' });
        return;
    } catch (error: any) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
};

const createProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { name, description, price, countInStock, imageUrl } = req.body;

        const product = new Product({
            name,
            description,
            price,
            countInStock,
            imageUrl,
            createdBy: req.user?.id,
        });

        await product.save();

        res.status(201).json({ message: 'Product created successfully' });
    } catch (error: any) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
}

const getProductById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const product = await Product.findOne({ _id: req.params.id, createdBy: req.user?.id }).populate('createdBy');

        if (!product) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }

        res.json(product);
    } catch (error: any) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
}

const getAllProductsOfUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const products = await Product.find({ createdBy: req.user?.id });
        res.json(products);
    } catch (error: any) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
}

const removeProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const product = await Product.findOneAndDelete({ _id: req.params.id, createdBy: req.user?.id });

        if (!product) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }

        res.json({ message: 'Product removed successfully' });
    } catch (error: any) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
}

export { getAllProducts, createProduct, getProductById, getAllProductsOfUser, removeProduct };