import { useState } from "react";
import axios from "axios";
import { TodoInputComponent } from "./components/TodoInputComponent.jsx";
import { TodoRenderComponent } from "./components/TodoRenderComponent.jsx";
import { todo } from "../backend/db.js";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  setInterval(async () => {
    const response = await axios.get("http://localhost:4000/todos");
    const data = await response.json();

    setTodos([...todos, data]);
  }, 10000);
  return (
    <>
      <TodoInputComponent
        todos={todos}
        setTodos={setTodos}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
      />

      <TodoRenderComponent todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
