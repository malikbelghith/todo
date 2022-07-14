import React , { useState , useEffect } from "react";
import './App.css';
//importing components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";


function App() {

  // State Declaration

  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [statue,setStatue] = useState("all");
  const [filter,setFilter] = useState([]);

  //Filtring

  useEffect(()=>{
    filterHandler();
  },[todos,statue]);

  const filterHandler = () =>{
    switch (statue){
      case 'completed':
        setFilter(todos.filter(todo=>todo.completed === true));
        break;
      
      case 'uncompleted':
        setFilter(todos.filter(todo=>todo.completed === false));
        break;
      
      default :
        setFilter(todos);
    
    }
  }

  //save to Local
  const savaLocalTodos = () =>{
      localStorage.setItem("todos",JSON.stringify(todos));
  }

  const getLocalTodos = () =>{
    if(localStorage.getItem("todos")==null){
      localStorage.setItem("todos",JSON.stringify([]));
    }else{
     let todoLocal= JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }


  return (
    <div className="App">
       <header>
           <h1> Todo List </h1>
        </header>

      <Form 
      inputText={inputText}
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatue={setStatue}
      statue={statue}
      
      />
      
      <ToDoList
        todos={todos} 
        setTodos={setTodos} 
        filter={filter}
        />



    </div>
  );
}

export default App;
