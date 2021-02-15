import React, {useState, useEffect} from 'react';

export function App(){

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password,setPassword]= useState('');
  const [mobile, setMobile] = useState('');
  const [DOB, setDOB] = useState('');
  const [gender, setGender] = useState('')
  const [showTable,setShowTable] = useState(false);


  function showValues(event){
      event.preventDefault();
      setShowTable(!showTable)
  }

  // useEffect(()=>{
  //   console.log("Firstname:", firstname)
  //   console.log("Lastname:", lastname)
  //   console.log("Email:", email)
  //   console.log("Telephone:", telephone)
  //   console.log("Birthdata:", birthdata)
  //   console.log("Gender:",gender)
  // },[firstname,lastname,email,telephone,birthdata,gender])


    // function prikaziVrednosti(){
    // }

    return(
      <div id="app">
          <h4>Sign up</h4>
          <h5>Create a Yahoo email address </h5>
          <form onSubmit={showValues}> 
            <input
            
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(event)=>{setFirstName(event.target.value)}}
            />
            <br/>
            <br/>
            <input
            
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(event)=>{setLastName(event.target.value)}} 
            />
            <br/>
            <input 
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={e=>{setEmail(e.target.value)}}
            />
            <br/>
            <br/>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={e=>{setPassword(e.target.value) }}
            />
            <br/>
            <br/>
            <input 
              type="tel"
              placeholder="070-xxx-xxx"
              value={mobile}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
              onChange={e=>{setMobile(e.target.value)}}
            />
            <br/>
            <br/>
            <input
              type="text"
              placeholder="Enter Gender"
              value={gender}
              onChange={e=>{setGender(e.target.value)}}
            />
            <br/>
            <br/>

            <button type="submit">
              Show Values
            </button>
          </form>
          <br/>
          { showTable && <table border="1">
          <thead>
              <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Phone</th>
                  <th>DOB</th>
                  <th>Gemder</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{password}</td>
                <td>{mobile}</td>
                <td>{DOB}</td>
                <td>{gender}</td>

              </tr>
          </tbody>
          </table>}

        

      </div>
    )
}