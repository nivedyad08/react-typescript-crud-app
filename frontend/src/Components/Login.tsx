
function Login() {
  return (
    <>
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        <form>
/;.;/.            <h3>Login Here</h3>

            <label>Username</label>
            <input type="text" placeholder="Email or Phone" id="username"/>

            <label>Password</label>
            <input type="password" placeholder="Password" id="password"/>

            <button>Log In</button>
            <div className="social">
              <h4>Register</h4>
            </div>
        </form>
    </>
  )
}

export default Login