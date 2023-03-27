

function LoginPage() {
    return(
        <div className="login-container">
            <h1>Login</h1>
            <form className="login-form">
                <div>
                <label htmlFor="email">Email </label>
                <input id="email"></input>
                </div>
                <div>
                <label htmlFor="pw">Password </label>
                <input id="pw"></input>
                </div>
                <div>
                <p>Create an account <a style={{textDecorationLine: 'underline'}}>here</a></p>
                </div>
                <div>
                <button className="login-btn">Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;