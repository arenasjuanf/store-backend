const UsersService = require('../services/users-service');

class UserController{
  constructor(){}

  create = async(data) =>  (await new UsersService().create(data));

  getAll = async () => ({
    users: await new UsersService().find()
  });

  getOne = async (id) => {
    return await new UsersService().findOne(id);
  }
}

module.exports = UserController
