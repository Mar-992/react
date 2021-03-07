import constants from './constants'

const fetchUsersRequest = (requestParams) => {
    return {
        type: constants.GET_USERS_REQUESR,
        payload: requestParams
    }
}

const fetchUserSuccess = (users) => {
    return{
        type: constants.GET_USERS_SUCCEST,
        payload: users
    }
}

const fetchUsersFail = (error) =>{
    return{
        type: constants.GET_USERS_FAIL,
        payload: error
    }
}

export default {
    fetchUsersRequest,
    fetchUserSuccess,
    fetchUsersFail
}