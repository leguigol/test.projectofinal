import productModel from "../model/products.model.js";
import ProductDTO from "../dto/product.dto.js";

export default class ProductRepositoryDao {
  constructor(dao) {
    this.dao = dao;
    // console.log(dao);
  }

  getAllProducts=async()=>{
    try {
      let result=await this.dao.getAllProducts();
      return result;
        
    } catch (error) {
      console.log("🚀 ~ ProductRepositoryDao ~ getAllProducts=async ~ error:", error)
      
    }
  }

  createProduct = async (productBodyDto) => {
    try {
      const newProduct = await this.dao.createProduct(productBodyDto);
      return newProduct;
    } catch (error) {
      throw new Error("Error al crear el producto: " + error.message);
    }
  };

  getProductById = async (id) => {
    try {
      const product = await this.dao.getProductById(id);
      if (!product) {
        throw new Error(`Product with id ${id} not found`);
      }
      return product;
    } catch (error) {
      console.error("Error in getProductById:", error);
      throw new Error("Error retrieving the product: " + error.message);
    }
  }
  // getProductById = async (pId) => {
  //   try {
  //     const productData = await productModel.findById({ _id: pId });
  //     return productData;
  //   } catch (error) {
  //     return res.status(500).json({ message: error.message });
  //   }
  // };

  // createProduct = async (productBodyDto) => {
  //   try {
  //     const newProduct = await productModel.create(productBodyDto);
  //     return newProduct;
  //   } catch (error) {
  //     return res.status(500).json({ message: error.message });
  //   }
  // };

  deleteProductById = async (pid) => {
    try {
      const deleteP = await this.dao.deleteProductById(pid);
      return deleteP;
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}