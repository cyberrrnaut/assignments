export function TodoRenderComponent({ todos }) {
 
 
    todos.map((todo) => {
    return (
      <>
        <h1>{todo.title}</h1>
        <p>{todo.description} </p>
        <button>Completed </button>
      </>
    );
  });
}
