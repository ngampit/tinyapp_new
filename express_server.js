const express = require('express');
const app = express();
const PORT = 8080;

const urlDatabase = {
  "b2XVn2": 'http://www.lighthouselabs.ca',
  "9sm5xK": 'http://www.google.com'
};

app.get("/",(req,res) => {
  res.send("hello!");
});

app.listen(PORT, () => {
  console.log("Example app listening on port ${PORT}");
});