import { BUY_CAKE, RESTOKE_CAKES, ADD_CAKE } from './../constants/CakeConstants';

export const buyCake = (numOfCakes) => {
    return{
        type: "BUY_CAKE" ,
        payload: numOfCakes
    }
}

export const restockCakes = () => {
    return{
        type:"RESTOKE_CAKES",
        payload: 10
    }
}

export const addCakes = () =>{
    return{
        type: "ADD_CAKE",
        payload:''
    }
}