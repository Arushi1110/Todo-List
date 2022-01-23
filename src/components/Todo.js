import React from "react";

function Todo({ text, todo, todos, setTodos }){
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id ))
    };
    const completeHandler = () =>{
        setTodos(
            todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item
        })
        )
    }
    return(
    <div className="todo">
      <li className={`todo-item ${todo.completed?"completed":""}`}>{text}</li>
      <button onClick ={completeHandler} className="complete-btn">c</button>
      <button onClick ={deleteHandler} className="trash-btn">uc</button>
    </div>
    );
}

export default Todo;