import React, {
    ReactElement,
    Suspense,
    useState,
    useEffect,
    useContext,
} from 'react'
import './Home.css'
import { createStore } from 'redux'
import { Redirect } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase, { socialAuth } from '../../util/firebase/firebase.js'
import { auth } from '../../routes'
import { ThemeContext } from '../../util/themeContext'

const NavBar = React.lazy(() => import('../../components/NavBar/NavBar'))

function counterReducer(
    state = { value: 0 },
    action: { type: string }
): { value: number } {
    switch (action.type) {
        case 'counter/incremented':
            return { value: state.value + 1 }
        case 'counter/decremented':
            return { value: state.value - 1 }
        default:
            return state
    }
}

const store = createStore(counterReducer)

function Home(): ReactElement {
    const [counter, setCounter] = useState(0)
    const [user] = useAuthState(socialAuth)
    const msg = firebase.messaging()

    useEffect(() => {
        store.subscribe(() => setCounter(store.getState().value))
        msg.getToken({
            vapidKey:
                // eslint-disable-next-line max-len
                'BGhXg7U9kVPQRPcX3c5RKGJY7kAJIe6N62e0gocSYEjT7Fd_LgIDumMzHoGLaRthKCD3oVwz_6nicTKOUSAWEpo',
        }).then((data) => {
            // eslint-disable-next-line no-console
            console.warn('token', data)
        })
    }, [msg])

    const decrementCounter = (): void => {
        store.dispatch({ type: 'counter/decremented' })
    }

    const incrementCounter = (): void => {
        store.dispatch({ type: 'counter/incremented' })
    }

    const { theme } = useContext(ThemeContext)
    return auth.data.loggedIn || user ? (
        <div className={`Home ${theme === 'Dark' && 'DarkHome'}`}>
            <Suspense fallback={<div>Loading...</div>}>
                <NavBar />
            </Suspense>
            <div className="HomeContent">
                <h1>Welcome to Homepage</h1>
                <div id="Counter">
                    <button type="button" onClick={decrementCounter}>
                        -
                    </button>
                    <h1>{counter}</h1>
                    <button type="button" onClick={incrementCounter}>
                        +
                    </button>
                </div>
            </div>
        </div>
    ) : (
        <Redirect to="/SignUp" />
    )
}

export default Home
