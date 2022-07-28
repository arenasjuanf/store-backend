const UsersService = require('../services/users-service');
module.exports = {
  getAll: () => ({
    users: new UsersService().find()
  }),
  getOne: (id) => {
    return new UsersService().getOne(id);
  }
}
