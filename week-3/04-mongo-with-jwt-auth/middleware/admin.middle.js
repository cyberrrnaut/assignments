// Middleware for handling auth
const path = require("path");
const dotenv = require("dotenv");
const envPath = path.resolve(__dirname, "../../../.env");
dotenv.config({ path: envPath });

const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_KEY;

function adminMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const words = token.split(" ");
  const jwtToken = words[1];

  const response = jwt.verify(jwtToken, jwtSecret);

  if (response.username) {
    next();
  } else {
    res.status(401).send("Unauthorized access");
  }
}

module.exports = adminMiddleware;
