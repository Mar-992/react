import React,{useState,useEffect} from 'react'
import { Todos } from './Todos';

export function App(){

    const [person,setPerson] = useState({firstName:"",lastName:""} );
    const [car,setCar]= useState({model:"Yugo", year:1986} );
    const [days,setDays] = useState(["Monday","Tuesday","Wednesday"]);
    const [newTodo,setNewTodo] = useState('');
    const [todos,setTodos]= useState(
        [
            {id:0,todoText:"Listen React", done:false},
            {id:1,todoText:"Eat Dinner",done:false},
            {id:2,todoText:"Tekst nekakov", done:false}
        ]
    )

    useEffect(()=> {
        console.log(person)
    },[person] )

    function updateCar(){
        setCar({
            ...car,
            year:2016
        })
    }

    function addDay(){
        setDays(['Sunday',...days,'Thursday'])
    }

    function addTodo(){
        let todoObject= {
            id:todos.length+1 ,
            todoText: newTodo,
            done: false
        }

        setTodos([...todos,todoObject])
        setNewTodo('');
    }
    function markTodoAsDone(todo){
        setTodos(
            [
                ...todos.map(item =>(item.id === todo.id) ? 
                {id:item.id,todoText:item.todoText,done:!item.done} 
                :item)
            ]
        )

    }

    function deleteItem(todo){
        setTodos(
            [
                ...todos.filter(item=>(item.id !== todo.id)  )
            ]
        )
    }

    return(
        <div id="app">
            <h2>App</h2>
            <input
                type="text"
                placeholder="Enter First Name"
                value={person.firstName}
                onChange={e=>setPerson({...person, firstName:e.target.value})}
            />
            <input
                type="text"
                placeholder="Enter Last Name"
                value={person.lastName}
                onChange={e=>setPerson({...person, lastName:e.target.value})}
            />
            <h2>Car:</h2>
            <p>Model:{car.model} </p>
            <p>Year:{car.year} </p>

            <button onClick={updateCar}>
                Buy New Car
            </button>
            <ul>
                {days.map((day,i)=>{
                    return(
                        <li key={i}>
                            {day}
                        </li>
                    )
                })}
            </ul>
            <button onClick={addDay} >
                Add Day
            </button>
            <input 
                type="text"
                placeholder="Add New Todo"
                value={newTodo}
                onChange={e=>{setNewTodo(e.target.value)}}
            
            />
            <button onClick={addTodo}>
                Add Todo
            </button>

            {/* <button onClick={()=>{props.deleteItem(todo)} }> */}
                {/* Delete */}
            {/* </button> */}

            <Todos 
                todoList={todos}
                markTodoAsDone={markTodoAsDone}
                // deleteItem={deleteItem}
             />

        </div>
    )
}