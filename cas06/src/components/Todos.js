import React from 'react'
import PropTypes from 'prop-types';

export function Todos(props){
    console.log(props)
    return(
        <ol>
            {
                props.todoList.map((todo,i)=>{
                    return(<li className={todo.done ? "marked-done" : "r"} key={i}>
                            <span>{todo.todoText}</span>
                            <input 
                            type="checkbox"
                            value={todo.done}
                            checked={todo.done}
                            onChange={()=>{props.markTodoAsDone(todo)}}
                            />
                        </li>)
                } )
            }
        </ol>
    )
}

Todos.propTypes={
    todoList: PropTypes.array.isRequired,
    markTodoAsDone: PropTypes.func.isRequired,
    deleteItem:PropTypes.func
}