const express = require("express");
const routes = require("./src/router");
const { logErrors, errorHandler, boomErrorHandler } = require("./src/middlewares/error-handler");

const port = 3000;
const app = express()
  .use(express.json());
routes(app);
app.use(logErrors).use(boomErrorHandler).use(errorHandler);

app.listen(process.env.port | port, () => {
  console.log('app running, port: ', port);
});
