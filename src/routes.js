import React from 'react';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import { Route, Switch, Redirect } from 'react-router-dom';

class Auth{
    constructor(){
        this.data = {
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

    updateData = (data)=>{
        this.data = data;
    }
}

export const auth = new Auth();

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Logout" render = {() => {
                auth.data.loggedIn = false;
                <Redirect to="/SignIn" />
            }}>
        </Route>
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/SignIn" component={SignUp} />
      </Switch>
    </div>
  );
};