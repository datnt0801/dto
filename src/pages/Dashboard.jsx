import Category from "../components/CategoryList/category";
import TodoList from "../components/TodoList/todolist";
import React, { useState } from "react";
import './style.css'

function Dashboard() {

  const [category, setCategory] = useState(JSON.parse( localStorage.getItem('category') || '[]'))
  const [todo, setTodo] = useState(JSON.parse( localStorage.getItem('todo') || '[]'))

  const [condition, setCondition] = useState(true)

  return (
    <div className="dashboard">

      <div className="todolist">
        {condition && < TodoList
          category={category}
          todo={todo}
          setTodo={setTodo}
          setCondition={setCondition}
        />}
      </div>

      <div className="category">
        <Category
          category={category}
          setCategory={setCategory}></Category>
      </div>
    </div>
  );
}



export default Dashboard;


