import "./Login.css";
export default function Login() {
  function login(event) {
    console.log(event);
    event.preventDefault();
    // send a post request to myserver.com/login with email and pass   token = encrypt(email+pass+salt)  JWT
    // OAUTH -> send a post request to google.com/oauth | after recieving the token save it at myserver/oauth
    // the server returns a token if credentials are valid
    // save the token in the state,   (context, AuthContext)
    // if rememberMe==true save the token in LocalStorage also
    // everytime you make a req at the BE you include the token
  }
  return (
    <div className="login-page">
      <div className="img-container">
        <img src="/assets/images/login.png" alt="" />
      </div>
      <div className="form-container">
        <img className="logo" src="/assets/images/Wired.png" alt="" />
        <h1 className="form-title">Sign in or create an account</h1>
        <form onSubmit={(event) => login(event)}>
          <label htmlFor="email">Email address</label>
          <input type="email" placeholder="Email" />
          <button type="submit">CONTINUE WITH EMAIL</button>
        </form>
      </div>
    </div>
  );
}
