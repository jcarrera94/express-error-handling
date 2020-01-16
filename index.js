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

// this matches all routes and all methods
app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error: 'Not found'
  });
});

// error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something Broke!');
});

app.listen(port, () => console.log(`App listening on port: ${port}`));
