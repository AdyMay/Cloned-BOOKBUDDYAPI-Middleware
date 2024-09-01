const express = require("express");

const router = express.Router();

const verifyLogin = (req, res, next) => {
  console.log("Logged In");
  next();
};

router.get("/", verifyLogin, (req, res) => {
  res.send("Hello from Users");
});

module.exports = router;
