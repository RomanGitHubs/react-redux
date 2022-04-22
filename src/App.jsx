import './App.css'
import Form from './components/Form/Form'
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import React, { useState } from "react";

const allTodos = [
  {id:1, text: 'React', isChecked: false},
  {id:2, text: 'T-200', isChecked: false},
  {id:3, text: 'Sol Tul Ort Amn ', isChecked: true},
]

function App() {

  const [todos, setTodos] = useState(allTodos)
  const [filter, setFilter] = useState('all');

  const handleInputChange = ({ value }, id) => {
     const prevList = todos.map((item) =>
        item.id === id
          ? {
            ...item,
            text: value
          } : item
      )
    setTodos(prevList)
  };

  const getFilteredTodos = () => {
     if (filter === 'all') {
       return todos;
     }
     if (filter === 'completed') {
       return todos.filter((item) => item.isChecked);
     }
     if (filter === 'active') {
       return todos.filter((item) => !item.isChecked);
     }
   }

  const filteredArray = getFilteredTodos();

  const doneTodos = todos.filter(item => item.isChecked).length;
  const leftTodos = todos.length - doneTodos;

  const addTodo = (value) => {
    const newTodo = {
      id: Math.random(),
      text: value,
      isChecked: false,
    }

    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) => {
      const newTodos = todos.filter((item) => item.id !== id)
      setTodos(newTodos)
  }

  const toggleTodo = (id) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isChecked: !item.isChecked
        }
      }
    return item
    })
    setTodos(newTodos)
  }

  const checkAllButton = () => {
    const isAllCheck = todos.every((item => item.isChecked))
    const newTodos = todos.map((item) => {
      return  {
        ...item,
        isChecked: !isAllCheck
      }
    })
  setTodos(newTodos)
  };

  const isAllChecked = todos.length && todos.every(item => item.isChecked);

  const deleteChecked = () => {
    const filteredArray = todos.filter((item) => !item.isChecked);
    setTodos(filteredArray);
  };

  return (
    <div className="todo-app">
      <Header />
      <div className="todo-wrapper">
      <Form
        checkAllButton={checkAllButton}
        addTodo={addTodo}
        isAllChecked={isAllChecked}
        todos={todos}
      />
      <List
        todos={filteredArray}
        toggleTodo={toggleTodo}
        deleteTodos={deleteTodo}
        handleInputChange={handleInputChange}
      />
      {!!todos.length && <Footer
        leftTodos={leftTodos}
        filter={filter}
        setFilter={setFilter}
        onDelete={deleteChecked}
      />}
      </div>
    </div>
  )
}

export default App
