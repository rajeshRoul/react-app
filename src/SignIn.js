import './SignInOrUp.css';
import Home from './Home';

function SignIn(props) {

    if(!props.loggedIn){
        return (
            <div className="App">
                <h1>{props.title}</h1>
                <form>
                    <input type="email" name="email" placeholder="Your Email" value={props.logInEmail} onChange={props.handleLogInName}></input>
                    <input type="password" name="password" placeholder="Your password" value={props.logInPassword} onChange={props.handleLogInPassword}></input>
                    <button type="button" onClick={props.handleLogIn}>Sign Up</button>
                </form>
            </div>
        );
    }else{
        return (
            <Home username={props.username}></Home>
        )
    }
        
  }
  
  export default SignIn;