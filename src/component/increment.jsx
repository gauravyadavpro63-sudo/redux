import {useDispatch, useSelector} from "react-redux"
import {Increment,Decrement,Reset} from "./slice1"

function Counter(){

    const count=useSelector((state)=>state.slice1.count)//state contain information of store
    //subscribing to the event
    const dispatch=useDispatch();
    return(
        <>
        <h1>count is {count}</h1>
        <button onClick={()=>dispatch(Increment())}>increment</button>
        <button onClick={()=>dispatch(Decrement())}>decrement</button>
        <button onClick={()=>dispatch(Reset())}>reset</button>
        </> 
    )
}
export default Counter; 