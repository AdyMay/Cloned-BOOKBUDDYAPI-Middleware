//index.js in /api
const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("middleware running in api/index.js");
  next();
});

router.use("/users", require("./users"));

router.get("/", (req, res) => {
  res.send("Hello from /api");
});

module.exports = router;
