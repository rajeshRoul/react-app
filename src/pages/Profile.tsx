import React from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { auth } from '../routes';

function Profile() {
  if (auth.data.loggedIn) {
    return (
      <div className="Profile">
        <NavBar />
        <div className="HomeContent">
          <h1>{auth.data.name}</h1>
          <h3>{auth.data.email}</h3>
        </div>
      </div>
    );
  }
  return (<Redirect to="/SignIn" />);
}

export default Profile;
