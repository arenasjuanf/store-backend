const { Client } = require("pg");

function getConn(){
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "juan",
    password: "admin123",
    database: "my_store"
  });

  return await client.connect();

}

module.exports = getConn;
