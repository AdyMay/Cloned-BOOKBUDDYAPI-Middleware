const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("The Middleware is Running in API");
  next();
});

router.use("/users", require("./users"));

router.get("/", (req, res) => {
  res.send("Hello from the API");
});

module.exports = router;
