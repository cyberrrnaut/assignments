const dotenv = require("dotenv");
const mongoose = require("mongoose");


const path = require("path");
const envPath = path.resolve(__dirname, "../../../../.env");
dotenv.config({ path: envPath });

const connectDb = async ()=>{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Db connected");
}


// connectDb();

module.exports ={
    connectDb
}