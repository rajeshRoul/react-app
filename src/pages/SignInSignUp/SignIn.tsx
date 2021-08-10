import React, { ReactElement, useContext, Suspense } from 'react'
import './SignInOrUp.css'
import { Redirect } from 'react-router-dom'
import Button from '../../components/Button/Button'
import TextInput from '../../components/TextInput/TextInput'
import ToggleButton from '../../components/ToggleButton/ToggleButton'
import { ThemeContext } from '../../util/themeContext'

const Home = React.lazy(() => import('../Home/Home'))

type SigninProps = {
    loggedIn: boolean
    handleLogInPassword: any
    signedUp: boolean
    title: string
    logInEmail: string
    logInPassword: string
    handleLogIn: () => void
    handleLogInName: any
}

function SignIn(props: SigninProps): ReactElement {
    const {
        loggedIn,
        handleLogInPassword,
        signedUp,
        title,
        logInEmail,
        logInPassword,
        handleLogIn,
        handleLogInName,
    } = props

    const { theme, toggleTheme } = useContext(ThemeContext)

    if (!signedUp) {
        return <Redirect to="/SignUp" />
    }
    if (!loggedIn) {
        return (
            <div className={`App ${theme === 'Dark' && 'DarkModeSign'}`}>
                <h1>{title}</h1>
                <form>
                    <TextInput
                        type="email"
                        placeholder="Your Email"
                        value={logInEmail}
                        handleChange={handleLogInName}
                    />
                    <TextInput
                        type="password"
                        placeholder="Your password"
                        value={logInPassword}
                        handleChange={handleLogInPassword}
                    />
                    <div className="ActionButtons">
                        <ToggleButton
                            theme={theme}
                            handleToggle={toggleTheme}
                        />
                        <Button handleClick={handleLogIn} value="LogIn" />
                    </div>
                </form>
            </div>
        )
    }
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Home />
        </Suspense>
    )
}

export default SignIn
