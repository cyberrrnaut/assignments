const express = require("express");
const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
const jwtPassword = "123456";

// mongoose.connect(
//   "your_mongo_url",
// );

// const User = mongoose.model("User", {
//   name: String,
//   username: String,
//   pasword: String,
// });

const users = [
  {
    username: "cyb3rnaut",
    password: 12345,
    name: "Soumyendu Das",
  },
  {
    username: "strypher",
    password: 23456,
    name: "Swarnendu Das",
  },
  {
    username: "nilu",
    password: 34567,
    name: "Nilanjana Singh",
  },
];

const app = express();
app.use(express.json());

function userExists(username, password) {
  let res = false;
  users.map((each) => {
    if (each.username == username && each.password == password) {
      res = true;
    }
  });

  return res;
}

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username },jwtPassword); //encryption of username for jwt
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    
    //return a lit of all users
    // res.json(ALL_USERS) 
    
    // return a list of users other than this username
    const otherUsers = users.filter((user) => user.username != username)
    res.json(otherUsers)
    
    } catch (err) {
    return res.status(403).json({
    msg: "Invalid token",
    });
    }
    });
    

app.listen(3000, () => {
  console.log("Server started");
});
