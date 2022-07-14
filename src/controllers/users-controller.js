const UsersService = require('../services/users-service');
module.exports = {
  getAll: () => ({
    users: new UsersService().users()
  }),
  getOne: (id) => {
    return new UsersService().getOne(id);
  }
}
