import React from 'react';
import './LiItem.css'

const LiItem = ({ todo, toggleTodo, deleteTodo, editTodo }) =>{

    return (
        <li className="li">
            <input
              type="checkbox"
              className='item-checkbox'
              onChange={() => toggleTodo(todo.id)}
              checked={todo.isChecked}
            />
            <span
              className='item-span'
              onDoubleClick={() => editTodo(todo)}>{todo.text}
            </span>
            <button
              className='btn-delete'
              onClick={() => deleteTodo(todo.id)}>
            </button>
        </li>

    )
}

export default LiItem