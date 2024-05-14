const mongoose = require("mongoose");

const path = require("path");
const dotenv = require("dotenv");
const envPath = path.resolve(__dirname, "../../../.env");
dotenv.config({ path: envPath });

mongoose.connect(process.env.MONGODB_URI);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
