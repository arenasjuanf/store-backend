const UsersService = require('../services/users-service');
module.exports = {
  getAll: async () => ({
    users: await new UsersService().find()
  }),
  getOne: (id) => {
    return new UsersService().getOne(id);
  }
}
