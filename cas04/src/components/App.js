import React, {useEffect, useState} from 'react';


export function App(){

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [count,setCount] = useState(0)

  useEffect(()=>{
    console.log("Username:",username)
    console.log("Password:",password)
  },[username,password])

  function prikaziVrednosti(){
    alert(`username: ${username}\nPassword: ${password}\nCounter:${count}`)
  }

  console.log("This is Render Metod")
  return(
    <div id="app">
      <h2>App</h2>
      <input
      type="text"
      placeholder="Username"
      value={username}
      onChange={(event)=>{setUsername(event.target.value)} }
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
      />
      <button onClick={prikaziVrednosti}> Click </button>
      <br></br>
      <h2>Counter:{count}</h2>
      <img width={300} height={300} 
      alt="poster" 
      src={'https://www.thewrap.com/wp-content/uploads/2016/04/Alien.jpg'}
      onClick={()=>{setCount(count +1)}} 
      />
    </div>
  )
}