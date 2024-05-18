import { ProductService } from "../repository/index.js";
import ProductDTO from "../dto/product.dto.js";

export default class ProductCtrl {
  productService;
  constructor() {
    this.productService = ProductService;
  }

  getAllProducts = async (req, res) => {
    try {
      const products = await this.productService.getAllProducts(req, res);
      return res.json({ message: `getAllProducts`, products });
    } catch (error) {
      console.log(
        "🚀 ~ file: product.controller.js:11 ~ ProductCtrl ~ getAllProducts= ~ error:",
        error
      );

      return res.status(500).json({ message: error.message });
    }
  };

  getProductById = async (req, res) => {
    try {
      const {pid}=req.params; 
      console.log(pid);
      const product = await this.productService.getProductById(pid);
      return res.json({ message: `method getUserById`, product });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  deleteProductById = async (req, res) => {
    try {
      console.log("IN PRODUCT CONTROLLER****");
      const {pid}=req.params;  
      const product = await this.productService.deleteProductById(pid);

      if (!product) {
        return res.status(500).json({
          message: `can not delete this product`,
        });
      }

      return res.json({
        message: `method deleteUserById`,
        product,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  createProduct = async (req, res) => {
    try {
      console.log("BODY!!", req.body);
      const productDto = new ProductDTO(req.body);

      // TODO: si el deteo tiene algun error lanzar su error 400 o BAD REQUEST

      const product = await this.productService.createProduct(productDto);

      return res.json({
        message: `product created`,
        product,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}