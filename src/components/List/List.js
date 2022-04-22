import React from 'react';
import LiItem from "../LiItem/LiItem";

const List = ({
  todos = [],
  toggleTodo,
  deleteTodos,
  setTodos,
  setUpdatedItem,
  updatedItem,
  handleInputChange,
}) => {

  return (
    <div>
      {!!todos.length && todos.map((todo) =>
        <LiItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodos}
          setTodos={setTodos}
          setUpdatedItem={setUpdatedItem}
          updatedItem={updatedItem}
          handleInputChange={handleInputChange}
        />
      )}
    </div>
  )
}

export default List
