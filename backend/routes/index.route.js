const express = require('express');
const app = express();
const router = express.Router();
const userRouter = require("./user.route.js");
const accountRouter= require("./account.route.js");


router.use("/user",userRouter);
router.use("/account",accountRouter);

module.exports = router;

