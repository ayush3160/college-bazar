import express from 'express';
import { createProduct, getAllProductsOfUser, getProductById, removeProduct } from '../controllers/productController';
import uploadMulter from '../utils/multer';

const productRouter = express.Router();

productRouter.post("/", createProduct, uploadMulter.single('image'));
productRouter.get("/productsofuser", getAllProductsOfUser);
productRouter.get("/:id", getProductById);
productRouter.delete("/:id", removeProduct);

export default productRouter;