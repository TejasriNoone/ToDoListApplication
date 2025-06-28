import React, { useState } from 'react';
import './Header.css';

function Header({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText('');
  };

  return (
    <header className="header">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task..."
        />
        <button type="submit">Add</button>
      </form>
    </header>
  );
}

export default Header;