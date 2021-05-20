import React,{useEffect,useState} from 'react';
import{useDispatch,useSelector} from 'react-redux'
import {usersOperations} from './duck'
import {UsersComponent} from './UsersComponent'


export default function UsersContainer() {

    const users = useSelector(state => state.usersReducer.users);
    const dispatch = useDispatch();
    const [user,setUser] = useState({});
    const [activeEdit,setActiveEdit] = useState(false);
    const [remove,setRemove] = useState({})

    useEffect(()=> {
        dispatch(usersOperations.fetchUsers())
    },[dispatch])

    function editUser(korisnik,active){
        setActiveEdit(active)
        setUser(korisnik)
    
    }

    function saveEditedUser(){
        dispatch(usersOperations.editUser(user))
        setUser({});
        setActiveEdit(false)
    }
    
    function deleteUser(){ // greska?
        dispatch(usersOperations.deleteUser(user))
        setRemove({})

    }

    return(
        <div id="users-container">
            {activeEdit && <React.Fragment>
                <input type="text" value={user.name} onChange={e=>setUser({...user,name:e.target.value})} />
                <br/>
                
                <input type="text" value={user.username} onChange={e=>setUser({...user,username:e.target.value})} />
                <br/>
                
                <input type="text" value={user.email} onChange={e=>({...user,email:e.target.value})} />
                <br/>

                <button onClick={saveEditedUser}>Save</button>
                <br/>

            </React.Fragment>}
            <UsersComponent 
                    users={users}
                    editUser={editUser}
                    deleteUser={deleteUser}
            />

        </div>
    )
}