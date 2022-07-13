const express = require("express");
const routes = require("./router");

const app = express().use(express.json());
const port = 3000;

routes(app);

app.listen(process.env.port | port, () => {
  console.log('app running, port: ', port);
});
