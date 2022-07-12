module.exports = {
  getAll: () => ({
    products: [
      {
        id:1,
        name: "technology",
        price: 10000
      },{
        id:2,
        name: "food",
        price: 10000
      },
      {
        id:3,
        name: "office",
        price: 10000
      }
    ]
  }),
  getOne: (id) => {
    return id.includes('undefined')  ?  'Invalid Id' :
    {
      id:3,
      name: "office",
      price: 10000
    }
  }

}
