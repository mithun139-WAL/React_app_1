import {useState} from "react";
function Counter(){
    let [count,setCount] = useState(0);
    function increase(){
        setCount(count+=2);
    }
    function decrease(){
        setCount(count-=2);
    }
    function reset(){
        setCount(0);
    }
    return (
        <div className="Counter">
            <h2>Counter</h2>
            count = {count}<br/>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Counter;