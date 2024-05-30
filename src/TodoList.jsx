import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, SetNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTools) => {
      return [...prevTools, { task: newTodo, id: uuidv4(), isDone: false }];
    });
  };

  let updateTodoValue = (event) => {
    SetNewTodo(event.target.value);
  };

  let taskDeleted = (id) => {
    setTodos((prevTodo) => todos.filter((prevTodo) => prevTodo.id != id));
  };

  let markAllDone = () => {
    setTodos((todos) =>
      todos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
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
            <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>
              {todo.task}
            </span>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => taskDeleted(todo.id)}>Delete</button>
            <button onClick={() => markAsDone(todo.id)}>UMark as Done</button>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={markAllDone}> Mark All Done </button>
    </div>
  );
}
