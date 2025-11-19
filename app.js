const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("<h1> Hi, deploying with t2.micro...on nov 19th 2025...at 11:00 </h1>"));

app.listen(80, () => {
  console.log("App listening on port 80!");
});
