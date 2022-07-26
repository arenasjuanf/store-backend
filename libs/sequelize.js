const { Sequelize } = require('sequelize');

const { config : { dbHost, dbPort, dbName, dbPassword, dbUser } } = require("./../config/config");
const USER = encodeURIComponent(dbUser);
const PASS = encodeURIComponent(dbPassword);
const URI = `postgres://${USER}:${PASS}@${dbHost}:${dbPort}/${dbName}`;

const sequelize = new Sequelize(URI, { dialect: 'postgres', logging: true});

module.exports = sequelize;
