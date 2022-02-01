import React from "react";

function Todo({ text, todo, todos, setTodos }){
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id ))
    };

    const favHandler = () =>{
        setTodos(
            todos.map((item) =>{
                if(item.id === todo.id){
                    return{
                        ...item, fav: !item.fav
                    }
                }
                return item
            })
        )
    }

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
        <button onClick ={completeHandler} className="complete-btn">
            <i className="fa fa-thumbs-up"></i>
        </button>

        <li className={`todo-item ${todo.completed?"completed":""}`}>{text}</li>

        <button onClick={favHandler} className="fav-btn">
        <i className="fa fa-heart" ></i>
        </button>

      <button onClick ={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>

    </div>
    );
}

export default Todo;