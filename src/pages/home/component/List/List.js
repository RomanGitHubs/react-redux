import React from 'react';
import LiItem from "../LiItem/LiItem";

const List = (props) => {
  const { todos = [], toggleTodo, deleteTodos, editTodo, filter} = props;

  return (
    <div className='list'>
      {!!todos.length && todos.map((todo) =>
        <LiItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodos}
          editTodo={editTodo}
        />
      )}
    </div>
  )
}

export default List
