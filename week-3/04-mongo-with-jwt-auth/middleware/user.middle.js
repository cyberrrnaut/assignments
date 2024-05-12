const path = require("path");
const dotenv = require("dotenv");
const envPath = path.resolve(__dirname, "../../../.env");
dotenv.config({ path: envPath });

const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_KEY;

function userMiddleware(req, res, next) {
  const bearerToken = req.headers.authorization;

  const words = bearerToken.split(" ");
  const jwtToken = words[1];

  const response = jwt.verify(jwtToken, jwtSecret);
  if (response.username) {
    req.username = response.username;
    req.password = response.username;
    next();
  } else {
    res.status(403).send("Unauthorized access");
  }
}

module.exports = userMiddleware;
