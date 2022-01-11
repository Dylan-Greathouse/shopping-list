import React from 'react'
import { useState } from 'react'

export const ToCart = ({ addItem }) => {
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setText('');
        addItem(text);
    };
    return (
        <form onSubmit={handleSubmit} className="form">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          ADD
        </button>
      </form>
    );
}

