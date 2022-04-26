import React from 'react';
import './Footer.css'
import Button from '../Button/FooterButton';
import { filterButtons } from './Constans';
import { clearCompleted, setFilter } from "../../../../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const Footer = () => {

  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(clearCompleted())
  };

  const todos = useSelector(state => state.listTodos.todos)
  const leftTodos = todos.filter((todo) => !todo.isChecked).length
  const activeFilter = useSelector(state => state.listTodos.filter)

    return (
      <div className="footer">
          <span
            className="counter"
            id="leftTask">{leftTodos} items left
          </span>
        {filterButtons.map(({ key, content }) =>
          <Button
            key={key}
            active={key === activeFilter}
            onClick={() => dispatch(setFilter(key))}>
            {content}
          </Button>
        )}
        <Button onClick={onDelete}>Clear completed</Button>
      </div>
    )
}

export default Footer
