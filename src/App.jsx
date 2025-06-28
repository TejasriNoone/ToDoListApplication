import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (text.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
    }
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div className="app">
      <Header onAdd={addTodo} />
      <ToDoList todos={todos} onToggle={toggleComplete} onDelete={deleteTodo} onEdit={editTodo} />
    </div>
  );
}

export default App;
