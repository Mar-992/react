import {ADD_CAKE, BUY_CAKE,RESTOKE_CAKES} from './../constants/CakeConstants'


const initialState ={
    cakes: 10,
    message:undefined
}

const CakeReducer = (state=initialState,action) =>{
    switch(action.type){

        case BUY_CAKE:
            if(state.cakes - action.payload < 0 ){
                return{
                    ...state,
                    message: `Not Enough Cakes  ${state.cakes} left`

                }
            }else{
                return{
                    ...state,
                    cakes: state.cakes - action.payload
                }
    
            }
        case RESTOKE_CAKES:
            return{
                ...state,
                cakes:action.payload,
                message:undefined
            }
        case ADD_CAKE:
            return{
                ...state,
                cakes: action.payload
            }

        default: return state
    }
}
export default CakeReducer;