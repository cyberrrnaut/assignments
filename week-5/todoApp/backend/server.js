const express = require("express");
const cors = require("cors");

const app = express();

const { isValidType1, isValidType2 } = require("./types.js");
const { todo } = require("./db.js");

app.use(express.json()); // for parsing json bodies
app.use(cors());

app.post("/todos", async (req, res) => {
  const todoBody = req.body;

  if (!isValidType1(todoBody)) {
    res.send("Provide valid inputs");
    return;
  }

  await todo.create({
    title: todoBody.title,
    description: todoBody.description,
    completed: false,
  });

  res.send("Todo created successfully");
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});

  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const idBody = req.body;

  if (!isValidType2(idBody)) {
    res.send("send valid todo id");
    return;
  }

  await todo.put(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
});

app.listen(4000, () => {
  console.log(`server started`);
});
