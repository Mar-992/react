const initialState = {
    greeting: ""
    
}
const SayHelloReducer = (state=initialState,action) => {

    switch(action.type){

        case "SAY_HELLO":
            return{
                ...state,
                greeting: action.payload
            }


        default: return state;
        case "SAY_GOODBYE":
            return{
                ...state,
                greet: action.payload
            }
    }

}
export default SayHelloReducer;