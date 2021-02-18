import React from 'react'
import PropTypes from 'prop-types';

export function Todos(props){
    console.log(props)
    return(
        <ol>
            {
                props.todoList.map((todo,i)=>{
                    return(<li className={todo.done ? "marked-done" : ""} key={i}>
                            <span>{todo.todoText}</span>
                            {/* <input 
                            type="checkbox"
                            value={todo.done}
                            checked={todo.done}
                            onChange={()=>{props.markTodoAsDone(todo)}}
                            /> */}
                            <button onClick={()=>{props.deleteItem(todo)} }>
                                Delete
                            </button>
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