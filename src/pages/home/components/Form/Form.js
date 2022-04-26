import React, {useState} from 'react';
import './Form.css'
import { useDispatch, useSelector } from "react-redux";
import { addTodo, allToggleTodo } from "../../../../store/actions/actions";

const Form = () => {

  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.listTodos.todos)
  const handleChange = (e) => setValue(e.target.value)

  const checkAllButton = (event) => {
    dispatch(allToggleTodo(event.target.checked))
  }

  const isAllChecked = todos.length && todos.every(todo => todo.isChecked)

  const handleSubmit = event => {
    event.preventDefault();
    const valueWithoutTrims = value.trim();
    if (!valueWithoutTrims) return;
    dispatch(addTodo(value))
    setValue('')
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label">
        {
          !!todos.length && (
          <input
            type="checkbox"
            className="checkbox-all"
            id="check-all"
            onChange={checkAllButton}
            checked={isAllChecked}
          />)
        }
      </label>
      <input
        className="input-todo"
        type="text"
        placeholder="What needs to be done?"
        onChange={handleChange}
        value={value}
        style={{ fontStyle: value ? 'normal' : 'italic'}}
      />
    </form>
  )
}

export default Form;