import React, { ReactElement, Suspense, useEffect, useContext } from 'react'
import './Home.css'
import { Redirect } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase, { socialAuth } from '../../util/firebase/firebase.js'
import { auth } from '../../routes'
import { ThemeContext } from '../../util/themeContext'
import Counter from '../../components/Counter/Counter'

const NavBar = React.lazy(() => import('../../components/NavBar/NavBar'))

function Home(): ReactElement {
    const [user] = useAuthState(socialAuth)
    const msg = firebase.messaging()
    useEffect(() => {
        msg.getToken({
            vapidKey:
                // eslint-disable-next-line max-len
                'BGhXg7U9kVPQRPcX3c5RKGJY7kAJIe6N62e0gocSYEjT7Fd_LgIDumMzHoGLaRthKCD3oVwz_6nicTKOUSAWEpo',
        }).then((data) => {
            // eslint-disable-next-line no-console
            console.warn('token', data)
        })
    }, [msg])

    const { theme } = useContext(ThemeContext)
    return auth.data.loggedIn || user ? (
        <div className={`Home ${theme === 'Dark' && 'DarkHome'}`}>
            <Suspense fallback={<div>Loading...</div>}>
                <NavBar />
            </Suspense>
            <div className="HomeContent">
                <h1>Welcome to Homepage</h1>
                <Counter />
            </div>
        </div>
    ) : (
        <Redirect to="/SignUp" />
    )
}

export default Home
