const express = require("express");
const routes = require("./src/router");
const { logErrors, errorHandler } = require("./src/middlewares/error-handler");

const app = express().use(express.json());
const port = 3000;

routes(app);

app.listen(process.env.port | port, () => {
  console.log('app running, port: ', port);
});
