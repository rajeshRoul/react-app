import React, { ReactElement, useContext, Suspense } from 'react'
import { Redirect } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { socialAuth } from '../../util/firebase/firebase.js'
import { auth } from '../../routes'
import { ThemeContext } from '../../util/themeContext'
import './Profile.css'

const NavBar = React.lazy(() => import('../../components/NavBar/NavBar'))

function Profile(): ReactElement {
    const { theme } = useContext(ThemeContext)
    const { name, email } = auth.data
    const [user] = useAuthState(socialAuth)
    if (auth.data.loggedIn || user) {
        return (
            <div className={`Profile ${theme === 'Dark' && 'ProfileDark'}`}>
                <Suspense fallback={<div>Loading...</div>}>
                    <NavBar />
                </Suspense>
                <div className="ProfileContent">
                    <h1>{user ? user.displayName : name}</h1>
                    <h3>{user ? user.email : email}</h3>
                </div>
            </div>
        )
    }
    return <Redirect to="/SignUp" />
}

export default Profile
