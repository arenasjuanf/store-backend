const { Client } = require("pg");

async function getConn(){
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "juan",
    password: "admin123",
    database: "my_store"
  });

  await client.connect();
  return client;
}

module.exports = getConn;

