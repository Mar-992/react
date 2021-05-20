import React from 'react';

export function UsersComponent(props){
    console.log(props)

    return(
        <div id="user-component">
            <table border ="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.length > 0 && props.users.map(user=>{
                        return(
                            <tr key={user.id} >
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.username}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                <button onClick={()=>props.editUser(user,true) }>Edit</button>
                                <button onClick={()=>props.deleteUser(user)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>

        </div>
    )
}