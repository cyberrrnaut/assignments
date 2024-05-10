const express = require("express");

const app = express();
let errorCount = 0;

app.get("/user", function (req, res) {
  throw new Error("User not found");
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.get("/errorCount", function (req, res) {
  res.status(200).json({ errorCount });
});

app.use((err,req,res,next)=>{
  errorCount+=1;
  res.status(404).json({});
})
module.exports = app;
