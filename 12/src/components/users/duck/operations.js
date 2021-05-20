import actions from './actions';
import { getUsers,changeUser, removeUser } from './../../../api/usersApi';

const fetchUsers = (requestParams) => {
    return dispatch => {
        dispatch(actions.fetchUsersRequest(requestParams))
        return getUsers(requestParams)
            .then(result => {
                dispatch(actions.fetchUsersSuccess(result))
                return result;
            })
            .catch(error => {
                dispatch(actions.fetchUsersFail(error));
                return error;
            })
    }
}

const editUser =(requestParams) => {
    return dispatch => {
        dispatch(actions.editUserRequest(requestParams))
        return changeUser(requestParams)
            .then(result=>{
                dispatch(actions.editUserSuccess(result))
                return result
            })
            .catch(error=>{
                dispatch(actions.editUserFail(error))
                return error
            })
    }
}

const deleteUser = (requestParams) => {
    return dispatch => {
        dispatch(actions.deleteUserRequest(requestParams))
        return removeUser(requestParams)
            .then(result=>{
                dispatch(actions.deleteUserSuccess(result))
                return result
            })
            .catch(error=>{
                dispatch(actions.deleteUserFail(error))
                return error
            })
    }
}
export default {
    fetchUsers,
    editUser,
    deleteUser
}