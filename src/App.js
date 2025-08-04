import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Weather from './pages/Weather';
import TodoList from './pages/TodoList';
import AddTodo from './pages/AddTodo';
import Products from './pages/Products';
import News from './pages/News'; 

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/weather"
          element={
            <div className="App">
              <h1 style={{ textAlign: 'center' }}>🌦 Weather App</h1>
              <Weather />
            </div>
          }
        />

        <Route
          path="/todo"
          element={
            <div className="App">
              <h1 style={{ textAlign: 'center' }}>📝 To-Do List</h1>
              <AddTodo addTodo={addTodo} />
              <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
              />
            </div>
          }
        />

        <Route path="/products" element={<Products />} />

        <Route
          path="/news"
          element={
            <div className="App">
              <h1 style={{ textAlign: 'center' }}>📰 Latest News</h1>
              <News />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
