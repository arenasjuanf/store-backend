const ProductsService = require('../services/products-service')

class ProductsController {

  service = new ProductsService();

  constructor(){}

  getAll(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve( this.service.products );
      }, 2000);
    });

  };

  getOne (id){
    return this.service.findOne(id);
  }

  filter (id){
    return this.service.filter(id);
  }

  create(data)  {
    return this.service.create(data);
  }

  update(id,data){
    return this.service.update(id,data);
  }

  delete(id){
    return this.service.delete(id);

  }

}
module.exports = ProductsController
