import productModel from "../model/product.model.js";

class ProductServiceDao {
  constructor() {}

  getAllProducts = async (req, res) => {
    try {
      return await productModel.find({});
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  getProductById = async (req, res) => {
    try {
      return await productModel.findById({ _id: req.params.productId });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  createProduct = async (req, res) => {
    try {
      const newProduct = await productModel.create(req.body);
      return newProduct;
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  deleteProduct = async (req, res) => {
    try {
      const deleteProduct = await productModel.deleteOne(req.params.productId);
      return deleteProduct;
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default ProductServiceDao