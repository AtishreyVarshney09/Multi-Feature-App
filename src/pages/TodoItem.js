import React from "react";

function TodoItem({ todo, deleteTodo, toggleTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
    </li>
  );
}

export default TodoItem;
