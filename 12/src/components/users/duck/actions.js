import constants from './constants';

const fetchUsersRequest = (requestParams) => {
    return {
        type: constants.GET_USERS_REQUEST,
        payload: requestParams
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: constants.GET_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFail = (error) => {
    return {
        type: constants.GET_USERS_FAIL,
        payload: error
    }
}

const editUserRequest =(requestParams) =>{
    return{
        type:constants.PUT_USERS_REQUEST,
        payload:requestParams
    }
}

const editUserSuccess = (user) =>{
    return{
        type:constants.PUT_USERS_SUCCESS,
        payload:user
    }
}
const editUserFail =(error) =>{ 
    return{
        type: constants.PUT_USERS_FAIL,
        payload:error
    }
}
const deleteUserRequest =(requestParams)=>{
    return{
        type: constants.DELETE_USERS_REQUEST,
        payload: requestParams
    }
}
const deleteUserSuccess=(user)=>{
    return{
        type: constants.DELETE_USERS_SUCCESS,
        payload: user
    }
}
const deleteUserFail =(error)=>{
    return{
        type:constants.DELETE_USERS_FAIL,
        payload: error
    }
}

export default {
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersFail,
    editUserRequest,
    editUserSuccess,
    editUserFail,
    deleteUserRequest,
    deleteUserSuccess,
    deleteUserFail
}