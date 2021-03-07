import actions from './actions'
import {} from '../../../api/usersApi';

const fetchUsers = (requestParams) => {
    return dispatch => {
        dispatch(actions.fetchUsersRequest(requestParams))
        return getUsers(requestParams)
            .then(result => {
                dispatch(actions.fetchUserSuccess(result))
                return result
            })
            .catch(error =>{
                dispatch(actions.fetchUsersFail(error));
                return error
            })
    }

}
export default {
    fetchUsers
}