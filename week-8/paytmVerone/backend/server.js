const express = require("express");
const mainRouter = require('./routes/index.route.js')
const app = express();

const cors= require("cors");

 const {connectDb} = require("./database/index.db.js");
 connectDb();

const path = require("path");
const dotenv = require("dotenv");
const envPath = path.resolve(__dirname, "../../../.env");
dotenv.config({ path: envPath });

app.use(cors());
app.use(express.json());

app.use("/api/v1",mainRouter);


app.listen(process.env.PORT,()=>{
    console.log(`server started on port: ${process.env.PORT}`);
});
