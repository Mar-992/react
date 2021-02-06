import React from 'react';

export function FruitList(props){

    console.log(props);
    return(
        <ul>
            {props.listOfFruits.map((fruit,i)=>{
                return(
                    <li key={i}>
                        {fruit}
                    </li>
                )
            })}
        </ul>
    )
}