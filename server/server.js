const express = require('express');
const app = express();
const test = require("./Router/test");

const port = 3001;

app.use("/api",test);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})