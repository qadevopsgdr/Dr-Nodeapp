const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("<h1> Hi, deploying with t2.micro...on nov 18th at 11:40.. </h1>"));

app.listen(80, () => {
  console.log("App listening on port 80!");
});
