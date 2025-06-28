import React, { useState } from 'react';
import './ToDoItem.css';

function ToDoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span className="todo-text" onClick={() => onToggle(todo.id)}>
          {todo.text}
        </span>
      )}
      
      <div className="buttons">
        {isEditing ? (
          <button className="edit-button" onClick={handleSave}>Save</button>
        ) : (
          <button className="edit-button" onClick={handleEdit}>Edit</button>
        )}
        <button className="delete-button" onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
}

export default ToDoItem;
