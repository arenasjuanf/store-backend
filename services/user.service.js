const boom = require('@hapi/boom');
const getConn = require("../libs/postgres");


class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {

    const client  = await getConn();


    return [];
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
