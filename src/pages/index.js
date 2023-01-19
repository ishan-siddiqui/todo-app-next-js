import React, { useState } from 'react'

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [isStruck, setIsStruck] = useState([]);

const addTodo = (text) => {
  const newTodos = [...todos, { text }];
  setTodos(newTodos);
  document.getElementById('todo-input').value = "";
};

const strikeTodo = (index) => {
    const newIsStruck = [...isStruck];
    newIsStruck[index] = !newIsStruck[index];
    setIsStruck(newIsStruck);
};

const clearAll = () => {
    setTodos([]);
    setIsStruck([]);
}


  return (
    <div>
      <h1>To-Do App</h1>
      <form>
        <input type="text" placeholder="Add to-do" id="todo-input" />
        <button type="button" onClick={() => addTodo(document.getElementById('todo-input').value)}>
          Add
        </button>
      </form>
      <ul>
      {todos.map((todo, index) => (
        <li key={index} style={{textDecoration: isStruck[index] ? "line-through" : "none"}}>
          {todo.text} <button onClick={() => strikeTodo(index)}>{isStruck[index] ? 'Unstrike' : 'Strike'}</button>
        </li>
      ))}
    <button id='clearButton' onClick={clearAll}>Clear All</button>
    </ul>
    </div>
  )
}

export default Home
