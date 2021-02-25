import React, { useState } from 'react'
import {People} from './People'

export function App(){

  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [year,setYear]= useState('')
  const [people, setPeople]=useState ([
    {id: 1, name: "Pero", lastName: "Perovski", year: 1996},
    {id: 2, name:"Ivan", lastName: "Ivanovski", year: 1997},
    {id: 3, name: "Stefan", lastName: "Stefanovski", year: 1998}
  ]);
 
  function deletePeople(id){
    setPeople(
      [
        ...people.filter(people => id !== people.id)
      ]
    )

  }
  
   return(
     <div id="app">
       <h2>Vezba</h2>
       <form>
         <input 
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value) }
         />
         <br/>
         <br/>
         <input 
         type="text"
         placeholder="Last name"
         value={lastName}
         onChange={(event)=>setLastName(event.target.value) }

         />
         <br/>
         <br/>
         <input 
         type="text"
         placeholder="Birth year"
         value={year}
         onChange={(event)=>setYear(event.target.value)}
         />
         <br/>
         <br/>
         <button onClick={deletePeople}>
          Add Item
         </button>

       </form>
       <People 
        people={people}
        />

     </div>
   )
}