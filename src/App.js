import React, {useState, useEffect} from 'react';
import './App.css';

// import components
import Form from './components/Form.js'
import TodoList from './components/TodoList.js';

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(()=> {filterHandler()},[todos,status])

  const filterHandler=()=>{
    switch(status){
      case "completed" :
        setFilteredTodos(todos.filter((todo)=>todo.completed === true))
        break;
      case "uncompleted" :
        setFilteredTodos(todos.filter((todo)=>todo.completed === false))
        break;
      case "fav" :
        setFilteredTodos(todos.filter((todo)=>todo.fav === true))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  return (
    <div className="App">
      <header>Focus On Your Day </header>

      <Form 
        inputText = {inputText} 
        setInputText = {setInputText} 
        todos = {todos} 
        setTodos = {setTodos}
        setStatus = {setStatus}/>
      
      <div  className='tasks'><i class="fas fa-clipboard-list"></i>
        <header>Tasks of the day </header> </div>

      <TodoList todos = {todos} 
        setTodos = {setTodos}
        filteredTodos={filteredTodos}
        />
    </div>
  );
} 

export default App;
