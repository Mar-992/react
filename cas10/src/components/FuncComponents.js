import React, { useEffect } from 'react'
import {sayHello} from './../actions/SayHelloActions'
import {useDispatch,useSelector} from 'react-redux';
import {sayGoodbye} from './../actions/SayHelloActions'

export function FuncComponents(){
    const greeting = useSelector(state=>state.SayHelloReducer.greeting);
    const dispatch = useDispatch();
    const greet = useSelector(state=>state.SayHelloReducer.greet);

    useEffect(()=>{
        dispatch(sayHello())
    },[dispatch] )

    useEffect(()=> {
        dispatch(sayGoodbye())
    },[sayGoodbye])

    return(
        <div id="func-component"> 
            <h2>Functional Components</h2>
            <h2>{greeting}</h2>
            <h2>{greet}</h2>
        </div>
    )


}