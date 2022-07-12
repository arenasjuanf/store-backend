const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req,res) => {
  res.send('express server');
})

app.listen(process.env.port | port, () => {
  console.log('app running, port: ', port);
})
