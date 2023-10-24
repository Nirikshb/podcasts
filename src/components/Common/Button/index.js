import React from 'react';
import './style.css';

const Button = ({ text, onClick, disabled }) => {
  return (
    /* The <button> element with an onClick event handler, custom CSS classes, and disabled attribute */
    <button onClick={onClick} className={`custom-btn${disabled ? ' disabled' : ''}`} disabled={disabled}>
      {text} {/* Display the button text */}
    </button>
  );
};

export default Button;
