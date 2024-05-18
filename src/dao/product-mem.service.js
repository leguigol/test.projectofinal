class ProductMemServiceDao {
    products;
    constructor() {
      this.products = [];
    }
  
    getAllProducts = async () => {
      try {
        return await this.products;
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    };
  
    async getProductById(id) {
      try {
          const products = await this.getAllProducts()
          const product = products.find(e => e.id === parseInt(id))
          if (!product) {
            return null;
          } 
          return product;
      } catch (error) {
          throw error;
      }
  }
 
    createProduct = async (productDTO) => {
      try {
        this.products.push(productDTO);
        return productDTO;
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    };
  
    async deleteProductById(id) {
      const index = this.products.findIndex(product => product.id === parseInt(id));
      if (index !== -1) {
        this.products.splice(index, 1);
        return true; 
      }
      return false; 
    }

  }
  
  export default ProductMemServiceDao;