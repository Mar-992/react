export const sayHello = () => {//action creator
    return{
    type:"SAY_HELLO",
    payload:"Hi and Welcome to this App" //action {type:, payload}
    }
}

export const sayGoodbye = () => {
    return{
        type:"SAY_GOODBYE",
        payload:"Bye and Goodbye"
    }
}