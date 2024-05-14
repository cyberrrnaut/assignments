import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([{}]);

  function addTodo() {
    setTodo([
      ...todo,
      {
        id: todo.length + 1,
        text: `Todo ${todo.length + 1}`,
        completed: "false",
      },
    ]);
  }

  return (
    <>
      <button onClick={addTodo}> Add todo </button>

      <ul>
        {todo.map((todos) => (
          <TodoComponent
            key={todos.id}
            text={todos.text}
            completed={todos.completed}
          ></TodoComponent>
        ))}
      </ul>
    </>
  );
}

function TodoComponent(props) {
  return (
    <>
      <h1> {props.text}</h1>
      <p>{props.completed} </p>
    </>
  );
}

export default App;
