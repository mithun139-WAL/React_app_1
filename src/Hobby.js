import {useState} from "react";
function Hobby(){
    let [hobby, setHobby] = useState("Initial Hobby");
    let [city,setCity] = useState("Initial City");
    function addHobby(event){
        event.preventDefault();
        console.log(event);
        console.log(event.target);
        let formTag = event.target;
        let inputTag = formTag.hobby;
        let inputTagCity = formTag.city;
        console.log(formTag);
        console.log(inputTag);
        setHobby(inputTag.value);
        setCity(inputTagCity.value);
    }

    return (
        <div className="Hobby">
            Hobby = {hobby} & city = {city}
            <br/>
            <form onSubmit={addHobby}>
                <input type="text" name="hobby"/>
                <input type="text" name = "city"/>
                <button>Add Hobby</button>
            </form>
        </div>
    );
}

export default Hobby;