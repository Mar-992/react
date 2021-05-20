import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {addCakes, buyCake,restockCakes} from './../actions/CakeActions'
// import React, {useState} from 'react'


export function Cake(){

    const cakes = useSelector(state=> state.CakeReducer.cakes)
    const errorMessage = useSelector(state => state.CakeReducer.message)
    const dispatch = useDispatch();

    const [addCakes,setAddCakes] = useState('');
    const [print,setPrint]=useState(false);
  
    function getCakes(val){
      setAddCakes(val.target.value)
    }
    

    return(
        <div id="cake">
            <h2>Cakes available :{cakes} </h2>
            {errorMessage && <h2>{errorMessage} </h2> }
            <button onClick={()=>{dispatch(buyCake(1))} }>Buy Cake </button>
            <br /><br />
            <button onClick={()=>{dispatch(buyCake(2))} }>Buy Two Cakes </button>
            <br /><br />
            <button onClick={()=>{dispatch(buyCake(3))} }>Buy Three Cakes </button>
            <br /><br/>
            <button onClick={()=>{dispatch(restockCakes())} }>Restock</button>
            <br /><br/>
           
            {
                print?
                <h2>{addCakes}</h2>
                : ''
            }
            <h2>Cake number :{getCakes} </h2>
             <input
                type = "text"
                placeholder="Add Cakes" 
                onChange={getCakes}
            />
            <button onClick={()=>{setPrint(true)}} >Add Cakes</button>
            
        </div>
    )
}