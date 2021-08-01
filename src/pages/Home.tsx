import React, { ReactElement } from 'react'
import { Redirect } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { auth } from '../routes'

function Home(): ReactElement {
    if (auth.data.loggedIn) {
        return (
            <div className="Home">
                <NavBar />
                <div className="HomeContent">
                    <h1>Welcome to Homepage</h1>
                </div>
            </div>
        )
    }
    return <Redirect to="/SignIn" />
}

export default Home
