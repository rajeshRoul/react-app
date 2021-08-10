import React, { ReactElement, lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home/Home'))
const SignUp = lazy(() => import('./pages/SignInSignUp/SignUp'))
const Profile = lazy(() => import('./pages/Profile/Profile'))
const AuthorList = lazy(() => import('./pages/AuthorList/AuthorList'))

type Authentication = {
    name: string
    email: string
    password: string
    title: string
    signedUp: boolean
    logInEmail: string
    logInPassword: string
    loggedIn: boolean
}

class Auth {
    data: Authentication

    constructor(prop: Authentication) {
        this.data = prop
    }

    updateData = (data: Authentication): void => {
        this.data = data
    }
}

export type { Authentication }
export const auth = new Auth({
    name: '',
    email: '',
    password: '',
    title: 'SignUp',
    signedUp: false,
    logInEmail: '',
    logInPassword: '',
    loggedIn: false,
})

export const Routes = (): ReactElement => (
    <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/">
                <Redirect to="/Home" />
            </Route>
            <Route exact path="/Logout">
                <Redirect to="/SignIn" />
            </Route>
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/AuthorList" component={AuthorList} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/SignIn" component={SignUp} />
        </Switch>
    </Suspense>
)
