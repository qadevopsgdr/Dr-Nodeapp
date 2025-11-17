const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("<h1>Hello from ECS..DR with pipeline...Cleaned action files at 12:30 pm..</h1>"));

app.listen(80, () => {
  console.log("App listening on port 80!");
});
