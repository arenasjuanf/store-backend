const { Sequelize } = require('sequelize');
const { config : { dbHost, dbPort, dbName, dbPassword, dbUser } } = require("./../config/config");
const { setupModels } = require('./../db/models');

const USER = encodeURIComponent(dbUser);
const PASS = encodeURIComponent(dbPassword);
const URI = `postgres://${USER}:${PASS}@${dbHost}:${dbPort}/${dbName}`;

const sequelize = new Sequelize(URI, { dialect: 'postgres', logging: true});

setupModels(sequelize);
sequelize.sync();


module.exports = sequelize;
