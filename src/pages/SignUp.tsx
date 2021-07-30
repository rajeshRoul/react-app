import '../styles/SignInOrUp.css';
import React from 'react';
import { Redirect } from 'react-router-dom';
import SignIn from './SignIn';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { auth } from '../routes';
import type { Authentication } from '../routes';

class SignUp extends React.Component<any, Authentication> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      title: 'SignUp',
      signedUp: false,
      logInEmail: '',
      logInPassword: '',
      loggedIn: false,
    };
    auth.updateData(this.state);
    props.history.push('/SignUp');
  }

  handleLogInName = (e : any) => {
    this.setState({ logInEmail: e.target.value });
  }

  handleLogInPassword = (e: any) => {
    this.setState({ logInPassword: e.target.value });
  }

  handleLogIn = () => {
    const {
      email, logInEmail, password, logInPassword,
    } = this.state;
    if (email === logInEmail && password === logInPassword) {
      return (
        this.setState({
          loggedIn: true,
        }, () => {
          auth.updateData(this.state);
            <Redirect to="/Home" />;
        })
      );
    }
    return (
      this.setState({
        title: 'Email/Password is incorrect',
      })
    );
  }

  handleSignUp = () => {
    const { name, email, password } = this.state;
    if (!name || !email || !password) {
      return (this.setState({
        title: 'Please Enter all fields',
      }));
    }
    return (this.setState({
      signedUp: true,
      title: 'Log In',
    }, () => {
      auth.updateData(this.state);
    }));
  }

  handleName = (e : any) => {
    this.setState({ name: e.target.value });
  }

  handleEmail = (e : any) => {
    this.setState({ email: e.target.value });
  }

  handlePassword = (e : any) => {
    this.setState({ password: e.target.value });
  }

  render() {
    const {
      signedUp,
      title,
      name,
      email,
      password,
      logInEmail,
      logInPassword,
      loggedIn,
    } = this.state;
    if (!signedUp) {
      return (
        <div className="App">
          <h1>{title}</h1>
          <form>
            <TextInput type="text" placeholder="Your Name" value={name} handleChange={this.handleName} />
            <TextInput type="email" placeholder="Your Email" value={email} handleChange={this.handleEmail} />
            <TextInput type="password" placeholder="Your password" value={password} handleChange={this.handlePassword} />
            <Button handleClick={this.handleSignUp} value="SignUp" />
          </form>
        </div>
      );
    }
    return (
      <SignIn
        title={title}
        logInEmail={logInEmail}
        logInPassword={logInPassword}
        handleLogInName={this.handleLogInName}
        handleLogInPassword={this.handleLogInPassword}
        handleLogIn={this.handleLogIn}
        loggedIn={loggedIn}
        signedUp={signedUp}
      />
    );
  }
}

export default SignUp;
