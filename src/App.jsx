import './App.css'
import Form from './pages/home/components/Form/Form'
import Header from "./pages/home/components/Header/Header";
import List from "./pages/home/components/List/List";
import Footer from "./pages/home/components/Footer/Footer";
import React from "react";
import {useSelector} from "react-redux";

const App = () => {

  const todos = useSelector(state => state.listTodos.todos)

  return (
    <div className="todo-app">
      <Header />
      <div className="todo-wrapper">
        <Form />
        <List />
          {!!todos.length && <Footer />}
      </div>
    </div>
  )
}

export default App
