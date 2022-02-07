function Registration(){
    function register(){
        alert("Registration Successful");
    }
    return (
        <div className="Login">
            <h2>Registration</h2>
            <input type="text" name="fname" placeholder="Enter First Name"/><br/>
            <input type="text" name="lname" placeholder="Enter Last Name"/><br/>
            <input type="email" name="email" placeholder="Enter Email Id"/><br/>
            <input type="text" name="username" placeholder="Enter Username"/><br/>
            <input type="number" name="age" placeholder="Enter Age"/><br/>
            <button onClick={register}>Register</button>
        </div>
    );
}

export default Registration;