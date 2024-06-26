export default class ProductDTO {
    constructor(product) {
      this.id=product.id;
      this.title = product.title.toUpperCase();
      this.description = product.description;
      this.code=product.code;
      this.price = product.price;
      this.status=product.status;
      this.stock = product.stock;
      this.category=product.category;
      this.thumbnail=product.thumbnail;
    }
  }