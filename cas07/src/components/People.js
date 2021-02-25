import React from 'react'
import PropTypes from 'prop-types';

export function People(props){

    return(
        <div>
            <table border="2">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Birth Year</td>
                    </tr>
                </thead>
                <tbody>
                    {props.people.map((people, i) =>{
                        return(
                            <tr key={people.id}>
                                <td>{people.id} </td>
                                <td>{people.name} </td>
                                <td>{people.lastName} </td>
                                <td>{people.year}</td>
                                <button onClick={()=>props.deletePeople(people.id) } >
                                    Delete Item
                                </button>
                            </tr>
                        )
                    } )}
                </tbody>

            
            </table>

        </div>
    )
}

People.propTypes={
    deleteItem: PropTypes.func.isRequired,
}