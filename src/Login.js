function Login(){
    let title = "This is a Login Component title";
    let description = "This is the description of the component";
    function signIn(){
        alert("You are logged in");
    }
    return (
        <div className="Login">
            <h1>{title}</h1>
            <h2>{description}</h2>
            {signIn()}
            5+4 = {5+4}<br/>
            <input type="email" name="email"/><br/>
            <input type="password" name="password"/><br/>
            <button onClick={signIn}>SignIn</button>
        </div>
    );
}

export default Login;