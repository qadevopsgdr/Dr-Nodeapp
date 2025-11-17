const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("<h1> Hi, This is sample Node JS application. Pushed image to AWS ECR and deployed on EC2 Instance...1st version.......Deployed at 15:43 </h1>"));

app.listen(80, () => {
  console.log("App listening on port 80!");
});
