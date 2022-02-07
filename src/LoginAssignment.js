function Login(){
    function logIn(){
        alert("You are logged in");
    }
    return (
        <div className="Login">
            <h2>Login</h2>
            <input type="email" name="email"/><br/>
            <input type="password" name="password"/><br/>
            <button onClick={logIn}>Login</button>
        </div>
    );
}

export default Login;