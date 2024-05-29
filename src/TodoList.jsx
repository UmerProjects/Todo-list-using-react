import { useState } from "react";

export default function TodoList() {
  let [todos, setTodos] = useState(["sample"]);
  let [newTodo, SetNewTodo] = useState("");

  let addNewTask = () => {
    setTodos([...todos, newTodo]);
  };

  let updateTodoValue = (event) => {
    SetNewTodo(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type Text"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <button onClick={addNewTask}>Add List</button>
      <br />
      <br />
      <br />
      <hr />
      <h4>To do List</h4>
      <ul>{todos.map((todo) => (<li>{todo}</li>))}</ul>
    </div>
  );
}
