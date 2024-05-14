import axios from "axios";
import { React, useState } from "react";

export function TodoInputComponent({
  todos,
  setTodos,
  title,
  setTitle,
  description,
  setDescription,
}) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          style={{ padding: "10px", margin: "10px" }}
          type="text"
          placeholder="Title"
        ></input>
        <input
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          style={{ padding: "10px", margin: "10px" }}
          type="text"
          placeholder="Description"
        ></input>
        <button
          onClick={() => {
            axios.post("http://localhost:4000/todos", {
              title: title,
              description: description,
            });
          }}
        >
          Add todo
        </button>
      </div>
    </>
  );
}
