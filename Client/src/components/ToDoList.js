import React from "react";
import Todo from "./Todo"
const ToDoList = ({todos,setTodos,filter}) =>{
    return(

        <div className="todo-container">
        <ul className="todo-list">
            {filter.map((todo) =>(
                <Todo 
                key={todo.id}
                setTodos={setTodos}  
                text={todo.text} 
                todos={todos} 
                todo={todo} 
                />
            ))}
        </ul>
        </div>

    );
}

export default ToDoList;


