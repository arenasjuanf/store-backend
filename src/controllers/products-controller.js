const ProductsService = require('../services/products-service')
module.exports = {
  getAll: () => {
    const service = new ProductsService();
    return service.products;
  },
  getOne: (id) => {
    const service = new ProductsService();
    return service.findOne(id);
  },
  filter: (id) => {
    const service = new ProductsService();
    return service.filter(id);
  }

}
