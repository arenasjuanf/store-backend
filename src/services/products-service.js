const faker = require("faker");
const boom = require("@hapi/boom");

class ProductsService{

  constructor(){
    this.products = this.generate();
  }

  generate(){
    const products = [];
    for( let i = 0; i < 100; i++) {
      products.push({
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.imageUrl(),
        id: faker.datatype.uuid()
      });
    }
    return products
  }

  async create(data){
    const newProduct = {
      id: faker.datatype.uuid(),
     ...data
    };
    this.product.push(newProduct)
  }

  async filter(id){
    return 'filtered: '+id;
  }

  async getOne(id, next){
    try{
      this.mad();
      return id.includes('undefined')  ?  '--- Invalid Id ---' :
      {
        id,
        nombre: 'Xiaomi mi band 5',
        precio: 165000
      }
    }catch(e){
      next('error controlado')
    }

  }

  async update(id, changes, next){
    const index = this.products.findIndex(product => product.id === id);
    if(index !== -1){
      this.products[index] = {...this.products[index], ...changes};
    }else{
      next(boom.notFound("product not found"));
    }
  }

  async delete(id, next){
    const index = this.products.findIndex(product => product.id === id);
    if(index !== -1){
      delete this.products.splice(index,1);
      return {
        message: "product deleted",
        success: true
      };
    }else{
      next(boom.notFound("product not found"));

    }
  }
}

module.exports = ProductsService;
