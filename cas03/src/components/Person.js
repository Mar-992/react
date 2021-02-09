import React from 'react';
import PropTypes from 'prop-types';

export function Person(props){
    console.log(props)
        return(
            <div id="person">
                <table border="1">
               <thead>
                   <tr>
                       <th>
                           FirstName
                       </th>
                       <th>
                           LastName
                       </th>
                       <th>
                           Street
                       </th>
                   </tr>
               </thead>
               <tbody>
                   {props.persons.map((person,i)=>{
                       return(
                           <tr key={i}>
                               <td>
                                   {person.firstName}
                               </td>
                               <td>
                                   {person.lastName}
                               </td>
                               <td>
                                   {person.addres.street}
                               </td>
                           </tr>
                       )
                   })}
               </tbody>
           </table>
            </div>
        )
    

}

Person.propTypes = {
    firstName: PropTypes.array.isRequired
}