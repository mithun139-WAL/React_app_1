import {useState} from "react";
function Native(){
    let [city, setCity] = useState("Initial City");
    function addCity(event){
        event.preventDefault();
        let formTag = event.target;
        let inputTag = formTag.city;
        setCity(inputTag.value);   
    }

    return (
        <div className="Hobby">
            <h2>City : {city}</h2>
            <br/>
            <form onSubmit={addCity}>
                <input type="text" name="city"/>
                <button>Add City</button>
            </form>
        </div>
    );
}

export default Native;