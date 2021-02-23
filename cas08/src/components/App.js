import React, { useEffect, useState } from 'react'
import {Switch, Route} from 'react-router-dom'
import { About } from './About'
import { Contact } from './Contact'
import {Info} from './Info'
import {Nav} from './Nav'
import {Users} from './Users'
import {UserList} from './UserList'

export function App(){

  const [userList,setUserList] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(json=> setUserList(json))
    .catch(err=>alert(err))
  },[] )

  return(
    <div id="app">
      <h2>App</h2>
      <Nav />

      <Switch>
        
        <Route exact path="/about" component={About} />
        <Route path="/info" component={Info} />
        <Route path="/about/contact" component={Contact} />
        <Route path="/users" component={Users} />
        <Route path="/user-list" render={()=>{
          return <UserList listOfUsers={userList}  />
        }} />
      </Switch>
    </div>
  )
}