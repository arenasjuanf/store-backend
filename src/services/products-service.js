const faker = require("faker");

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

  async getOne(id){

    return id.includes('undefined')  ?  '--- Invalid Id ---' :
    {
      id,
      nombre: 'Xiaomi mi band 5',
      precio: 165000
    }

  }

  async update(id, changes){
    const index = this.products.findIndex(product => product.id === id);
    if(index !== -1){
      this.products[index] = {...this.products[index], ...changes};
    }else{
      return{
        message: "product not found",
        success: false
      }
    }
  }

  async delete(id){
    const index = this.products.findIndex(product => product.id === id);
    if(index !== -1){
      delete this.products.splice(index,1);
      return {
        message: "product deleted",
        success: true
      };
    }else{
      return{
        message: "product not found",
        success: false
      }
    }
  }
}

module.exports = ProductsService;
