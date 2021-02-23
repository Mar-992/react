import React from 'react'

export function UserList(props){
    return(
        <div id="user-list">
            { props.listOfUsers.lenght > 0 ? <ul>
                {
                    props.listOfUsers.map(user=>{
                        return(
                            <li key={user.id}>
                                <span>ID:{user.id} </span>
                                <span>Name:{user.name} </span>
                                <span>Username:{user.username} </span>
                            </li>
                        )
                    })
                }
            </ul>
            : <h2>Loading...</h2>

            }
        </div>
    )
}