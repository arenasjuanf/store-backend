const { Pool } = require("pg");

  const { config : { dbHost, dbPort, dbName, dbPassword, dbUser } } = require("./../config/config");
  const USER = encodeURIComponent(dbUser);
  const PASS = encodeURIComponent(dbPassword);
  const URI = `postgres://${USER}:${PASS}@${dbHost}:${dbPort}/${dbName}`;


  const pool = new Pool({
    connectionString: URI
  });


module.exports = pool;
