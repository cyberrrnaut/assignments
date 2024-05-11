const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRouter = require("./routes/admin.route");
const userRouter = require("./routes/user.route");

// Middleware for parsing request bodies
app.use(bodyParser.json()); // already done for accessing body
app.use("/admin", adminRouter);
app.use("/user", userRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
