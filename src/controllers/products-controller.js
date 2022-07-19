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

  getOne (id,next){
    return this.service.getOne(id,next);
  }

  filter (id){
    return this.service.filter(id);
  }

  create(data)  {
    return this.service.create(data);
  }

  update(id,data, next){
    return this.service.update(id, data, next);
  }

  delete(id,next){
    return this.service.delete(id, next);

  }

}
module.exports = ProductsController
