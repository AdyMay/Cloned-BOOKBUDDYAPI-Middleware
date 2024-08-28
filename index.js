const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log("The Middleware in index.js");
  next();
});

app.use("/API", require("./API"));

app.get("/", (req, res) => {
  console.log(json);
  res.send("Hello");
});

app.get("/TODO", async (req, res, next) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await response.json();
    res.send(json);
  } catch (err) {
    next(err);
  }
  res.send("Hello");
});

app.use((error, req, res, next) => {
  console.log("Error", error);
  res.send({
    message: error.message,
  });
});

app.listen(8080, () => {
  console.log("The server is Running");
});
