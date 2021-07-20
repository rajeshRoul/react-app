import '../styles/SignInOrUp.css';
import React from 'react';
import SignIn from './SignIn';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

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
  }

  handleLogInName = (e)=>{
    this.setState({logInEmail: e.target.value});
  }

  handleLogInPassword = (e)=>{
    this.setState({logInPassword: e.target.value});
  }

  handleLogIn = () => {
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

  handleSignUp = () => {
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

  handleName = (e)=>{
    this.setState({name: e.target.value});
  }

  handleEmail = (e)=>{
    this.setState({email: e.target.value});
  }

  handlePassword = (e)=>{
    this.setState({password: e.target.value});
  }

  render(){
    if(!this.state.signedUp){
      return (
        <div className="App">
          <h1>{this.state.title}</h1>
          <form>
            <TextInput type="text" placeholder="Your Name" value={this.state.name} handleChange={this.handleName}></TextInput>
            <TextInput type="email" placeholder="Your Email" value={this.state.email} handleChange={this.handleEmail}></TextInput>
            <TextInput type="password" placeholder="Your password" value={this.state.password} handleChange={this.handlePassword}></TextInput>
            <Button handleClick={this.handleSignUp} value="SignUp"></Button>
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
        signedUp = {this.state.signedUp}
      ></SignIn>
      );
    }
  }
}

export default SignUp;
