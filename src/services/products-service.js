const faker = require("faker");

class ProductsService{

  constructor(){
    this.products = this.generate();
  }

  generate(){
    const products = [];
    for( let i = 0; i < 100; i++) {
      products.push({
        id: faker.datatype.id,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.imageUrl()
      });
    }
    return products
  }

  create(){

  }

  filter(id){
    return 'filtered: '+id;
  }

  getOne(id){

    return id.includes('undefined')  ?  '--- Invalid Id ---' :
    {
      id,
      nombre: 'Xiaomi mi band 5',
      precio: 165000
    }

  }

  update(){

  }
}

module.exports = ProductsService;
