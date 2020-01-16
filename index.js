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
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// error handler middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error',
    },
  });
});

/* 
If you are serving static pages instead of sending JSON response, the logic is still the same.

app.use((error, req, res, next) => {
 console.error(error); // log an error
 res.render(‘errorPage’) // Renders an error page to user!
}); 
*/

app.listen(port, () => console.log(`App listening on port: ${port}`));
