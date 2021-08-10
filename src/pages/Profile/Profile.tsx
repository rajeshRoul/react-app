import React, { ReactElement, useContext, Suspense } from 'react'
import { Redirect } from 'react-router-dom'
import { auth } from '../../routes'
import { ThemeContext } from '../../util/themeContext'
import './Profile.css'

const NavBar = React.lazy(() => import('../../components/NavBar/NavBar'))

function Profile(): ReactElement {
    const { theme } = useContext(ThemeContext)
    if (auth.data.loggedIn) {
        return (
            <div className={`Profile ${theme === 'Dark' && 'ProfileDark'}`}>
                <Suspense fallback={<div>Loading...</div>}>
                    <NavBar />
                </Suspense>
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
