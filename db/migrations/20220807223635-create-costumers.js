'use strict';

const {CustomerSchema, CUSTOMER_TABLE} = require('./../models/custumer.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CUSTOMER_TABLE)
  }
};
