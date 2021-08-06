import React, { ReactElement, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { auth } from '../routes'
import { ThemeContext } from '../util/themeContext'
import '../styles/Profile.css'

function Profile(): ReactElement {
    const { theme } = useContext(ThemeContext)
    if (auth.data.loggedIn) {
        return (
            <div className={`Profile ${theme === 'Dark' && 'ProfileDark'}`}>
                <NavBar />
                <div className="ProfileContent">
                    <h1>{auth.data.name}</h1>
                    <h3>{auth.data.email}</h3>
                </div>
            </div>
        )
    }
    return <Redirect to="/SignIn" />
}

export default Profile
