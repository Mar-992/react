import React from 'react';

export function Student(props){

    return(
        <div id="student">
            <h2>Student Name: {props.studentKM.ime} </h2>
            <h3>Student Last Name:{props.studentKM.prezime} </h3>
            <h4>Student Index no.:{props.studentKM.brNaIndeks} </h4>
        </div>
    )
}