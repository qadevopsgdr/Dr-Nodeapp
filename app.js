const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("<h1>Hello from ECS..DR with pipeline...Monday - 17th Nov..2nd time deployment ..</h1>"));

app.listen(80, () => {
  console.log("App listening on port 80!");
});
