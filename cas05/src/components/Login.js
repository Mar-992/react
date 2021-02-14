import { func } from 'prop-types';
import React,{useEffect, useState}  from 'react'
import {Input} from './Input'

export function Login(){

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [inputType,setInputType] = useState('password');

    function setToggle(){
        setInputType(
            inputType === 'password' ? 'text' : "password"
        )
        
    }

    function handleSubmit(event){
        event.preventDefault();
        alert(`Username:${username}\nPassword: ${password}`)
    }

    // useEffect(()=>{
    //     console.log("Username:",username)
    //     console.log("Password:",password)
    // }),[username,password]

    return(
        <div id="login">
            <form onSubmit={handleSubmit}>
                 <h2>Login</h2>
                    <Input 
                        type={"text"}
                        placeholder={"Enter Username"}
                        name="Username"
                         value={username}
                        onChange={(e)=>setUsername(e.target.value) }
                    />
                    <Input 
                        type={inputType}
                        placeholder={"Enter Password"}
                        name="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)  }
                        toggle={setToggle}
                    />
                    <button > 
                        Sign In
                    </button>
            </form>
        </div>
    )
}