import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/counterSlice";

function Counter(){
    const count  =  useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();
    const incrementButton = ()=>{
        dispatch(increment());
    }
    const decrementButton=()=>{
        dispatch(decrement());
    }
return(
    <div>
        Count : {count}
        <button onClick={incrementButton}>Increment </button>
        <button onClick={decrementButton}>Decrement</button>
    </div>
)
}
export default Counter;