import { useState, useEffect } from "react";

import axios from "axios";

export default function App() {
  const [buttonVal, setButtonVal] = useState(1);

  return (
    <>
      <button
        onClick={() => {
          console.log(buttonVal);
          setButtonVal(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          console.log(buttonVal);
          setButtonVal(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          console.log(buttonVal);
          setButtonVal(3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          console.log(buttonVal);
          setButtonVal(4);
        }}
      >
        4
      </button>
      <button
        onClick={() => {
          console.log(buttonVal);
          setButtonVal(5);
        }}
      >
        5
      </button>

      <TodoRender id={buttonVal} />
    </>
  );
}

function TodoRender({ id }) {
  const [todos, setTodos] = useState({});

  useEffect(() => {
    axios(`https://sum-server.100xdevs.com/todo?id=${id}`).then((res) => {
      setTodos(res.data.todo);
    });
  }, [id]);
  return (
    <>
      <h1> {todos.title}</h1>
      <h4>{todos.description}</h4>
    </>
  );
}
