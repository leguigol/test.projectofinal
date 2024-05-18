import { Router } from "express";
import ProductCtrl from "../controller/products.controller.js";

const productsRoutes = Router();
const productCtrl = new ProductCtrl();

productsRoutes.get("/", productCtrl.getAllProducts);
productsRoutes.get("/:pid", productCtrl.getProductById);
productsRoutes.post('/',productCtrl.createProduct);
productsRoutes.delete("/:pid", productCtrl.deleteProductById);

export default productsRoutes;