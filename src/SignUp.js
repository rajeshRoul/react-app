import './SignInOrUp.css';
import React from 'react';
import SignIn from './SignIn';

class SignUp extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name : '',
      email : '',
      password : '',
      title : 'SignUp',
      signedUp : false,
      logInEmail: '',
      logInPassword: '',
      loggedIn: false
    }
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleLogInName = this.handleLogInName.bind(this);
    this.handleLogInPassword = this.handleLogInPassword.bind(this);
  }

  handleLogInName(e){
    this.setState({logInEmail: e.target.value});
  }

  handleLogInPassword(e){
    this.setState({logInPassword: e.target.value});
  }

  handleLogIn(){
    if(this.state.email === this.state.logInEmail && this.state.password === this.state.logInPassword){
      return (
        this.setState({
          loggedIn : true
        })
      )
    }
    return (
      this.setState({
        title : 'Email/Password is incorrect'
      })
    )
  }

  handleSignUp(){
    const {name, email, password} = this.state;
    if(!name || !email || !password){
      return (this.setState({
        title : 'Please Enter all fields'
      }));
    }
    this.setState({
      signedUp : true,
      title : 'Log In'
    })
  }

  handleName(e){
    this.setState({name: e.target.value});
  }

  handleEmail(e){
    this.setState({email: e.target.value});
  }

  handlePassword(e){
    this.setState({password: e.target.value});
  }

  render(){
    if(!this.state.signedUp){
      return (
        <div className="App">
          <h1>{this.state.title}</h1>
          <form>
              <input type="text" name="name" placeholder="Your Name" value={this.state.name} onChange={this.handleName}></input>
              <input type="email" name="email" placeholder="Your Email" value={this.state.email} onChange={this.handleEmail}></input>
              <input type="password" name="password" placeholder="Your password" value={this.state.password} onChange={this.handlePassword}></input>
              <button type="button" onClick={this.handleSignUp}>Sign Up</button>
          </form>
        </div>
      )
    }else{
      return(
        <SignIn title={this.state.title} 
        logInEmail={this.state.logInEmail}
        logInPassword={this.state.logInPassword}
        handleLogInName={this.handleLogInName}
        handleLogInPassword = {this.handleLogInPassword}
        handleLogIn = {this.handleLogIn}
        loggedIn = {this.state.loggedIn}
        username = {this.state.name}
      ></SignIn>
      );
    }
  }
}

export default SignUp;
