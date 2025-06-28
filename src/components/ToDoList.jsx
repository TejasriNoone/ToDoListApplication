import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css';

function ToDoList({ todos, onToggle, onDelete, onEdit }) {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default ToDoList;