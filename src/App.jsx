import './App.css'
import Form from './pages/home/component/Form/Form'
import Header from "./pages/home/component/Header/Header";
import List from "./pages/home/component/List/List";
import Footer from "./pages/home/component/Footer/Footer";
import React, { useState } from "react";

function App() {
    const [todos, setTodos] = useState([
            {id:1, text: 'Terminator', isChecked: false},
            {id:2, text: 'T-200', isChecked: false},
            {id:3, text: 'Sol Tul Ort Amn ', isChecked: true},
        ])

  const [filter, setFilter] = useState('all');

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

  const editTodo = (todo) => {
    const value = todo.text
    console.log(value)
  }

  const checkAllButton = () => {
    const newTodos = todos.map((item) => {
      if (todos.every((item => item.isChecked))) {
        return {
          ...item,
          isChecked: false
        }
      } else {
        return {
          ...item,
          isChecked: true
        }
      }
    })
  setTodos(newTodos)
  };

  const isAllChecked = todos.length && todos.every(item => item.isChecked);

  const deleteChecked = () => {
    const filteredArray = todos.filter((item) => !item.isChecked);
    setTodos(filteredArray);
  };

  const handleDelete = () => {
    deleteChecked();
  };

  return (
    <div className="todo-app">
        <Header />
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
          editTodo={editTodo}
        />
      {!!todos.length && <Footer
        leftTodos={leftTodos}
        filter={filter}
        setFilter={setFilter}
        onDelete={handleDelete}
      />}
    </div>
  )
}

export default App
