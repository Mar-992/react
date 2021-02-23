import React from 'react';
import {Link} from 'react-router-dom';

export function Nav(){
    return(
        <ul>
            <li><Link to="/">Back to home</Link></li>
            <li><Link to="/about/contact">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/info">Info</Link></li>
            <li><Link to="/users">Users</Link></li>     
            <li><Link to="/userlist">User List</Link></li>
        </ul>
    )
}