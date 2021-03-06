import React, { ReactElement, useContext, Suspense } from 'react'
import './SignInOrUp.css'
import { Redirect } from 'react-router-dom'
import Button from '../../components/Button/Button'
import TextInput from '../../components/TextInput/TextInput'
import ToggleButton from '../../components/ToggleButton/ToggleButton'
import { ThemeContext } from '../../util/themeContext'
import SocialLoginButton from '../../components/SocialLoginButton/SocialLoginButton'

const Home = React.lazy(() => import('../Home/Home'))

type SigninProps = {
    loggedIn: boolean
    handleLogInPassword: any
    title: string
    logInEmail: string
    logInPassword: string
    handleLogIn: () => void
    handleLogInName: any
    handleGoogleAuth: () => void
    handleFbAuth: () => void
    signedUp: boolean
}

function SignIn(props: SigninProps): ReactElement {
    const {
        loggedIn,
        handleLogInPassword,
        title,
        logInEmail,
        logInPassword,
        handleLogIn,
        handleLogInName,
        handleGoogleAuth,
        handleFbAuth,
        signedUp,
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
                    <div className="SocialLoginContainer">
                        <SocialLoginButton
                            name="Google Login"
                            handleClick={handleGoogleAuth}
                            logoUrl="https://image.flaticon.com/icons/png/512/281/281764.png"
                        />
                        <SocialLoginButton
                            name="Facebook Login"
                            handleClick={handleFbAuth}
                            logoUrl="https://image.flaticon.com/icons/png/512/1384/1384053.png"
                        />
                    </div>
                    <div className="horizontalLine" />
                    <h3>Or Login using Email</h3>
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
