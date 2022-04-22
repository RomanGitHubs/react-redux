import React from 'react';
import './FooterButton.css'

const Button = ({
  children,
  onClick,
  active,
}) => (
  <button
    className= {active ? "button_active" : "button" }
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
