import React, { ReactElement, Suspense } from 'react'
import '../styles/Home.css'
import { createStore } from 'redux'
import { Redirect } from 'react-router-dom'
import { auth } from '../routes'
import { ThemeContext } from '../util/themeContext'

const NavBar = React.lazy(() => import('../components/NavBar'))

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

class Home extends React.Component<any, { value: number }> {
    constructor(props: any) {
        super(props)
        this.state = {
            value: 0,
        }
    }

    componentDidMount(): void {
        store.subscribe(() => this.setState({ value: store.getState().value }))
    }

    decrementCounter = (): void => {
        store.dispatch({ type: 'counter/decremented' })
    }

    incrementCounter = (): void => {
        store.dispatch({ type: 'counter/incremented' })
    }

    render(): ReactElement {
        const { theme } = this.context
        const { value } = this.state
        if (auth.data.loggedIn) {
            return (
                <div className={`Home ${theme === 'Dark' && 'DarkHome'}`}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <NavBar />
                    </Suspense>
                    <div className="HomeContent">
                        <h1>Welcome to Homepage</h1>
                        <div id="Counter">
                            <button
                                type="button"
                                onClick={this.decrementCounter}
                            >
                                -
                            </button>
                            <h1>{value}</h1>
                            <button
                                type="button"
                                onClick={this.incrementCounter}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
        return <Redirect to="/SignIn" />
    }
}

Home.contextType = ThemeContext

export default Home
