import React, { useState, useContext } from "react";
import { Context } from "./Context"; // Assuming Context is exported from Context.js

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Context.Provider value={{ count, setCount }}>
        <Count />
      </Context.Provider>
    </>
  );
}

const Count = () => {
  return (
    <>
      <CountRenderer />
      <Button />
    </>
  );
};

const CountRenderer = () => {
  const { count } = useContext(Context); // Use only count since setCount is not needed here

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
};

const Button = () => {
  const { count, setCount } = useContext(Context);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <div>Current Count: {count}</div>
    </>
  );
};

export default App;
