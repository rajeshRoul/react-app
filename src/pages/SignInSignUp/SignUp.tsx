import './SignInOrUp.css'
import React, { ReactElement, Suspense } from 'react'
import { Redirect } from 'react-router-dom'
import Button from '../../components/Button/Button'
import ToggleButton from '../../components/ToggleButton/ToggleButton'
import TextInput from '../../components/TextInput/TextInput'
import { auth } from '../../routes'
import type { Authentication } from '../../routes'
import { ThemeContext } from '../../util/themeContext'
import SocialLoginButton from '../../components/SocialLoginButton/SocialLoginButton'
import {
    socialAuth,
    googleAuthProvider,
    fbAuthProvider,
} from '../../util/firebase/firebase.js'

const SignIn = React.lazy(() => import('./SignIn'))

let unsubscribeSocialAuth: any

class SignUp extends React.Component<any, Authentication> {
    constructor(props: any) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            title: 'SignUp',
            signedUp: false,
            logInEmail: '',
            logInPassword: '',
            loggedIn: false,
        }
        auth.updateData(this.state)
        props.history.push('/SignUp')
    }

    componentDidMount(): void {
        unsubscribeSocialAuth = socialAuth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    signedUp: true,
                    loggedIn: true,
                })
            }
        })
    }

    componentWillUnmount(): any {
        unsubscribeSocialAuth()
    }

    handleLogInName = (e: any): void => {
        this.setState({ logInEmail: e.target.value })
    }

    handleLogInPassword = (e: any): void => {
        this.setState({ logInPassword: e.target.value })
    }

    handleLogIn = (): void => {
        const { email, logInEmail, password, logInPassword } = this.state
        if (logInEmail === '' || logInPassword === '') {
            return this.setState({
                title: 'Enter all the fields',
            })
        }
        if (email === logInEmail && password === logInPassword) {
            return this.setState(
                {
                    loggedIn: true,
                },
                () => {
                    auth.updateData(this.state)
                    ;<Redirect to="/Home" />
                }
            )
        }
        return this.setState({
            title: 'Email/Password is incorrect',
        })
    }

    validateInput = (): boolean => {
        const { name, email, password } = this.state
        if (!new RegExp(/^[a-zA-Z ]{2,30}$/).test(name)) {
            this.setState({
                title: 'Please Enter a valid Name',
            })
            return false
        }
        if (
            !new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email)
        ) {
            this.setState({
                title: 'Please Enter a valid Email',
            })
            return false
        }
        if (
            !new RegExp(
                /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
            ).test(password)
        ) {
            this.setState({
                title:
                    'Password must be of min 8 Characters \n' +
                    'It must contain at least a symbol, upper and lower case letters and a number',
            })
            return false
        }
        return true
    }

    handleSignUp = (): void => {
        const { name, email, password } = this.state
        if (!name || !email || !password) {
            return this.setState({
                title: 'Please Enter all fields',
            })
        }
        if (!this.validateInput()) {
            return undefined
        }
        return this.setState(
            {
                signedUp: true,
                title: 'Log In',
            },
            () => {
                auth.updateData(this.state)
            }
        )
    }

    handleName = (e: any): void => {
        this.setState({ name: e.target.value })
    }

    handleEmail = (e: any): void => {
        this.setState({ email: e.target.value })
    }

    handlePassword = (e: any): void => {
        this.setState({ password: e.target.value })
    }

    handleGoogleAuth = (): any => {
        socialAuth
            .signInWithPopup(googleAuthProvider)
            .then(() => {
                this.setState({
                    signedUp: true,
                    loggedIn: true,
                })
            })
            // eslint-disable-next-line no-console
            .catch(alert)
    }

    handleFbAuth = (): any => {
        socialAuth
            .signInWithPopup(fbAuthProvider)
            .then(() => {
                this.setState({
                    signedUp: true,
                    loggedIn: true,
                })
            })
            // eslint-disable-next-line no-console
            .catch((e) => this.setState({ title: e.message }))
    }

    render(): ReactElement {
        const {
            signedUp,
            title,
            name,
            email,
            password,
            logInEmail,
            logInPassword,
            loggedIn,
        } = this.state
        const { theme, toggleTheme } = this.context
        if (!signedUp) {
            return (
                <div className={`App ${theme === 'Dark' && 'DarkModeSign'}`}>
                    <h1>{title}</h1>
                    <form>
                        <div className="SocialLoginContainer">
                            <SocialLoginButton
                                name="Google Login"
                                handleClick={this.handleGoogleAuth}
                                logoUrl="https://image.flaticon.com/icons/png/512/281/281764.png"
                            />
                            <SocialLoginButton
                                name="Facebook Login"
                                handleClick={this.handleFbAuth}
                                logoUrl="https://image.flaticon.com/icons/png/512/1384/1384053.png"
                            />
                        </div>
                        <div className="horizontalLine" />
                        <h3>Or Register Now</h3>
                        <TextInput
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            handleChange={this.handleName}
                        />
                        <TextInput
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            handleChange={this.handleEmail}
                        />
                        <TextInput
                            type="password"
                            placeholder="Your password"
                            value={password}
                            handleChange={this.handlePassword}
                        />
                        <div className="ActionButtons">
                            <ToggleButton
                                theme={theme}
                                handleToggle={toggleTheme}
                            />
                            <Button
                                handleClick={this.handleSignUp}
                                value="SignUp"
                            />
                        </div>
                    </form>
                </div>
            )
        }
        if (!loggedIn) {
            return (
                <Suspense fallback={<div>Loading...</div>}>
                    <SignIn
                        title={title}
                        logInEmail={logInEmail}
                        logInPassword={logInPassword}
                        handleLogInName={this.handleLogInName}
                        handleLogInPassword={this.handleLogInPassword}
                        handleLogIn={this.handleLogIn}
                        loggedIn={loggedIn}
                        signedUp={signedUp}
                        handleGoogleAuth={this.handleGoogleAuth}
                        handleFbAuth={this.handleFbAuth}
                    />
                </Suspense>
            )
        }
        return <Redirect to="/Home" />
    }
}

SignUp.contextType = ThemeContext

export default SignUp
