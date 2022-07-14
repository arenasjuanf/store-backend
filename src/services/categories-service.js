

class CategoriesService{
  constructor(){
    this.categories = this.generate();
  }

  generate(){
    const categories = [
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
    ];
    return categories;
  }

  create(){

  }

  filter(id){
    return 'filtered: '+id;
  }

  getOne(id){

    return id.includes('undefined')  ?  'Invalid Id' :
    {
      id:3,
      name: "office",
      price: 10000
    }

  }

  update(){

  }
}

module.exports = CategoriesService;
