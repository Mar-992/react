import React from 'react';

export function SubjectList(props){

    console.log(props)
    return(
        <ul>
            {props.listOfSubjects.map((subject,i)=>{
                return(
                    <li key={i}>
                        {subject}
                    </li>
                )

            })}
        </ul>
    )
}