function Counter(){
    let count = 0;
    function increase(){
        count++;
    }
    function decrease(){
        count--;
    }
    function showCount(){
        alert(count);
    }
    return (
        <div className="Counter">
            count= {count}<br/>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={showCount}>ShowCount</button>
        </div>
    )
}
export default Counter;