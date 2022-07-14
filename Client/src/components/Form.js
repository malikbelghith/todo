import React from "react";

const form = ({setInputText,todos,setTodos,inputText,setStatue,filter}) =>{

  //here JS functions and whatever
    const inputTextHandler =(e)=>{
      setInputText(e.target.value)
    }
    const SubmitToDoHandler =(e)=>{
      e.preventDefault();
      setTodos([
        ...todos,{text:inputText,completed:false,id:Math.random()*1000}
      ])
      setInputText("");
    }
    const statueHandler =(e)=>{
      setStatue(e.target.value);
    }

     return(
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />

        <button onClick={SubmitToDoHandler} className="todo-button" type="submit">

          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select  onChange={statueHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
     );   
}
export default form;