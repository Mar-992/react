import React from 'react';

export function Welcome(props){

    //console.log(props);
    return(
        <div id="welcome">
            <p>Welcome, {props.ime} {props.prezime}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}