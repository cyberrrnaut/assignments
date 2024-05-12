const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRouter = require("./routes/admin.route");
const userRouter = require("./routes/user.route");

const path = require("path");
const dotenv = require("dotenv");
const envPath = path.resolve(__dirname, "../../.env");
dotenv.config({ path: envPath });

const jwtKey = process.env.JWT_KEY;

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

