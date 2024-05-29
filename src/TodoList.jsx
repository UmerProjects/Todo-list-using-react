import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
  let [newTodo, SetNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTools) => {
      return [...prevTools, { task: newTodo, id: uuidv4() }];
    });
  };

  let updateTodoValue = (event) => {
    SetNewTodo(event.target.value);
  };

  let taskDeleted = (id) => {
    setTodos((prevTodo) => todos.filter((prevTodo) => prevTodo.id != id));
  };

  let upperCaseAll = () => {
    setTodos((todos) => 
      todos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
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
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => taskDeleted(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={upperCaseAll}>Upper Case</button>
    </div>
  );
}
