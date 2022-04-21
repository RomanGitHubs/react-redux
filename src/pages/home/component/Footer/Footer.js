import React from 'react';
import './Footer.css'
import Button from '../Button/FooterButton';
import { filterButtons } from './Constans';

function Footer({ leftTodos, setFilter, onDelete, filter }) {
    return (
        <div className="footer">
            <span
              className="counter"
              id="leftTask">{leftTodos} left
            </span>
          {filterButtons.map(({ key, content }) =>
            <Button
              key={key}
              active={key === filter}
              onClick={() => setFilter(key)}>{content}
            </Button>
          )}
          <Button onClick={onDelete}>Clear completed</Button>
        </div>
    )
}


export default Footer

