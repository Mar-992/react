import constants from './constants'

const initialState ={
    users:[],
    message:undefined
}
export default function reducer(state=initialState,action){
    switch(action.type){
        case constants.GET_USERS_REQUESR:
            return{
                ...state
            }
        case constants.GET_USERS_SUCCEST:
            return{
                ...state,
                users: action.payload
            }
        case constants.GET_USERS_FAIL:
            return {
                ...state,
                message: action.payload

            }


        default: return state
    }
}