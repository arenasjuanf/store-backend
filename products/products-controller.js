const faker = require("faker");

module.exports = {
  getAll: () => {
    const products = [];
    for( let i = 0; i < 100; i++) {
      products.push({
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.imageUrl()
      });
    }
    return { products };
  },
  getOne: (id) => {
    return id.includes('undefined')  ?  '--- Invalid Id ---' :
    {
      id,
      nombre: 'Xiaomi mi band 5',
      precio: 165000
    }
  },
  filter: (id) => {
    return 'filtered: '+id;
  }

}
