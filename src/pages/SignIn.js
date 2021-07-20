import '../styles/SignInOrUp.css';
import Home from './Home';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { Redirect } from 'react-router-dom';


function SignIn(props) {
    if(!props.signedUp){
        return (<Redirect to="/SignUp" />);
    }
    if(!props.loggedIn){
        return (
            <div className="App">
                <h1>{props.title}</h1>
                <form>
                    <TextInput type="email" placeholder="Your Email" value={props.logInEmail} handleChange={props.handleLogInName}></TextInput>
                    <TextInput type="password" placeholder="Your password" value={props.logInPassword} handleChange={props.handleLogInPassword}></TextInput>
                    <Button handleClick={props.handleLogIn} value="Log In"></Button>
                </form>
            </div>
        );
    }else{
        return (
            <Home loggedIn={props.loggedIn}></Home>
        )
    }
        
  }
  
  export default SignIn;