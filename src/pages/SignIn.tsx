import React from 'react';
import '../styles/SignInOrUp.css';
import { Redirect } from 'react-router-dom';
import Home from './Home';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

type SigninProps = {
    loggedIn: boolean;
    handleLogInPassword: any;
    signedUp : boolean;
    title : string;
    logInEmail : string;
    logInPassword : string ;
    handleLogIn : () => void;
    handleLogInName : any;
}

function SignIn(props : SigninProps) {
  const {
    loggedIn,
    handleLogInPassword,
    signedUp,
    title,
    logInEmail,
    logInPassword,
    handleLogIn,
    handleLogInName,
  } = props;

  if (!signedUp) {
    return (<Redirect to="/SignUp" />);
  }
  if (!loggedIn) {
    return (
      <div className="App">
        <h1>{title}</h1>
        <form>
          <TextInput type="email" placeholder="Your Email" value={logInEmail} handleChange={handleLogInName} />
          <TextInput type="password" placeholder="Your password" value={logInPassword} handleChange={handleLogInPassword} />
          <Button handleClick={handleLogIn} value="LogIn" />
        </form>
      </div>
    );
  }
  return (
    <Home />
  );
}

export default SignIn;
