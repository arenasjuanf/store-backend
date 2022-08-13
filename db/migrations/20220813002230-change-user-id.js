'use strict';

const { DataTypes } = require('sequelize/types');
const { CUSTOMER_TABLE} = require('./../models/custumer.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CUSTOMER_TABLE, 'user_id',{
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true
    });
  },

  async down (queryInterface) {
    //await queryInterface.dropTable(CUSTOMER_TABLE)
  }
};

