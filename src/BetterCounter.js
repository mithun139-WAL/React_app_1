import {useState} from "react";
function BetterCounter(){
    let [count,setCount] = useState(0);
    function increase(){
        setCount(count++);
    }
    function decrease(){
        setCount(count--);
    }
    function reset(){
        setCount(0);
    }
    return (
        <div className="Counter">
            count= {count}<br/>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default BetterCounter;