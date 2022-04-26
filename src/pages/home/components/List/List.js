import React from 'react';
import LiItem from "../LiItem/LiItem";
import { useSelector } from 'react-redux'
import { selector } from "../../../../store/selectors";

const List = () => {

  const todos = useSelector(selector)

  return (
    <div className='list'>
      {!!todos.length && todos.map((todo) =>
        <LiItem
          key={todo.id}
          todo={todo}
        />
      )}
    </div>
  )
}

export default List
