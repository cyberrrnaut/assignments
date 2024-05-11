// Middleware for handling auth
const { Admin } = require("../db/index.db.js");

async function adminMiddleware(req, res, next) {
  //middleware to check if admin exist or not
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;

  const reply = await Admin.findOne({
     username,
     password,
  });

  if (reply) {
    next();
  } else {
    res.status(403).json({ msg: "admin doesn't exist!" });
  }
}

module.exports = adminMiddleware;
