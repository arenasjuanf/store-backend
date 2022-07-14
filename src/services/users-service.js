const faker = require("faker");

class UsersService{
  constructor(){
    this.users = this.generate();
  }

  generate(){
    const users = [
      {
        id:1,
        name: 'name',
        email: "email@email.com"
      },{
        id:2,
        name: 'name',
        email: "email@email.com"
      },
      {
        id:3,
        name: 'name',
        email: "email@email.com"
      },
      {
        id:4,
        name: 'name',
        email: "email@email.com"
      }
    ]
    return users;
  }

  create(){

  }

  filter(id){
    return 'filtered: '+id;
  }

  getOne(id){

    return id.includes('undefined')  ?  'Invalid Id' :
    {
      id,
      name: 'name',
      email: "email@email.com"
    }

  }

  update(){

  }
}
