import './SignOut.css'
import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { socialAuth } from '../../util/firebase/firebase.js'

function SignOut(): ReactElement {
    socialAuth.signOut()
    return (
        <div className="SignOut">
            <h1>You have Successfully Logged Out</h1>
            <br />
            <br />
            <br />
            <Link to="/SignUp">Click here to Sign Up or Log In</Link>
        </div>
    )
}

export default SignOut
