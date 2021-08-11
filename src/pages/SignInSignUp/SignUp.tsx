import './SignInOrUp.css'
import React, { ReactElement, Suspense } from 'react'
import { Redirect } from 'react-router-dom'
import Button from '../../components/Button/Button'
import ToggleButton from '../../components/ToggleButton/ToggleButton'
import TextInput from '../../components/TextInput/TextInput'
import { auth } from '../../routes'
import type { Authentication } from '../../routes'
import { ThemeContext } from '../../util/themeContext'

const SignIn = React.lazy(() => import('./SignIn'))

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

    handleLogInName = (e: any): void => {
        this.setState({ logInEmail: e.target.value })
    }

    handleLogInPassword = (e: any): void => {
        this.setState({ logInPassword: e.target.value })
    }

    handleLogIn = (): void => {
        const { email, logInEmail, password, logInPassword } = this.state
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

    handleSignUp = (): void => {
        const { name, email, password } = this.state
        if (!name || !email || !password) {
            return this.setState({
                title: 'Please Enter all fields',
            })
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
                />
            </Suspense>
        )
    }
}

SignUp.contextType = ThemeContext

export default SignUp
