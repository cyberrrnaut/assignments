const express = require("express");

const app = express();

app.get("/", (req, res) => {
  //query params data
  let n = req.query.n;
   
  res.send(n);
});

app.listen(3000, () => {
    console.log("Port listning on 3000");
});
