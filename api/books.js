const express = require("express");

// create a router object for the /books routes

const bookRouter = express.Router();

// {baseUrl}/api/books
bookRouter.get("/", (req, res) => {
  res.send("here are the books");
});

module.exports = apiRouter;
