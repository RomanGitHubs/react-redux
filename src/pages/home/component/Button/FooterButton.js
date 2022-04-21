import React from 'react';

const Button = ({ children, onClick, active }) => (
    <button
      className="primary-button"
      onClick={onClick}
      style={{ backgroundColor: active ? '#00000035' : 'whitesmoke' }}
    >
        {children}
    </button>
)

export default Button
