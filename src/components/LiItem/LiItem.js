import React, {useRef} from 'react';
import './LiItem.css'
import {useState} from 'react';

const LiItem = ({
  todo,
  toggleTodo,
  deleteTodo,
  handleInputChange
}) => {

  const editTodo = useRef(null)

  const [updatedItem, setUpdatedItem] = useState(null);

  let isCurrentBeingUpdated = updatedItem === todo.id;
  const press = (e) => {
    let key = e.key;
    if (key === "Enter" || key === "Escape") {
      setUpdatedItem(null)
    }
  }

  return (
    <li className="li__item">
      <input
        type="checkbox"
        className='item-checkbox'
        onChange={() => toggleTodo(todo.id)}
        checked={todo.isChecked}
      />
      <div
        className='item-span'
        onDoubleClick={() => {
          setUpdatedItem(isCurrentBeingUpdated ? null : todo.id)}
        }
      >
        {isCurrentBeingUpdated ? (
          <input
            className="edit-todo"
            autoFocus
            value={todo.text}
            onKeyDown={press}
            onBlur={() => setUpdatedItem(null)}
            onChange={(e) => handleInputChange(e.target, todo.id)}
          />
        ) :
          (todo.text)}
      </div>
      <button
        className='btn-delete'
        onClick={() => deleteTodo(todo.id)}>
      </button>
    </li>
  )
}

export default LiItem