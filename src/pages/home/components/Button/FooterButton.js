import React from 'react';
import './FooterButton.css'

const Button = ({
  children,
  onClick,
  isActive,
}) => (
  <button
    className= {isActive ? "button" : "button_active"}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
