const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res, next) => {
  // mimic an error by throwing an error to break the app!
  throw new Error('Something went wrong');
  res.send("Welcome to main route!");
});

app.get("/about", (req, res, next) => {
  res.send("This is the about route!");
});

app.listen(port, () => console.log(`App listening on port: ${port}`));
