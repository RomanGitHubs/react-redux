import React from 'react';
import './LiItem.css'
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "../../../../store/actions/actions";

const LiItem = ({
  todo,
}) => {

  const dispatch = useDispatch();
  const [isEdited, setEditedInput] = useState(false);

  const press = (e) => {
    let key = e.key;
    if (key === "Enter" || key === "Escape") {
      setEditedInput(false)
      dispatch(editTodo(e.target.value, e.id))
    }
  }
  const handleInputChange = (ev) => {

    dispatch(editTodo(ev.target.value, todo.id))
  };

  return (
    <li className="li__item">
      <input
        type="checkbox"
        className='item-checkbox'
        onChange={() => dispatch(toggleTodo(todo.id))}
        checked={todo.isChecked}
      />
      <div
        className='item-span'
        onDoubleClick={() => {
          setEditedInput(true)
        }}
      >
        {isEdited ? (
          <input
            className="edit-todo"
            autoFocus
            value={todo.text}
            onKeyDown={press}
            onBlur={() => setEditedInput(false)}
            onChange={handleInputChange}
          />
        ) :
          (todo.text)}
      </div>
      <button
        className='btn-delete'
        onClick={() => {
          dispatch(deleteTodo(todo.id))
        }}>
      </button>
    </li>
  )
}

export default LiItem
