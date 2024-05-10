const mongoose = require("mongoose");

async function connectDB() {
  try {
    const res = await mongoose.connect(
      "mongodb+srv://cyb3rnaut1:372595130@cluster0.a17pzfa.mongodb.net/"
    );
    console.log(`RESPONSE FROM MONGODB: ${res}`);
  } catch (err) {
    console.log(err);
  }
}
connectDB();

const User = mongoose.model("Users", { name: String, email: String });

const user = new User({ name: "Cybernaut", email:"cyberrrnaut@gmail.com" });

async function saveUser(){
const res = await user.save();
console.log(res);

}

saveUser();

