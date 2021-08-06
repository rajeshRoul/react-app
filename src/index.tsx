import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Routes } from './routes'
import store from './util/Redux/store'
import ThemeProvider from './util/themeContext'

ReactDOM.render(
    <ThemeProvider>
        <Provider store={store}>
            <Router>
                <Routes />
            </Router>
        </Provider>
    </ThemeProvider>,
    document.getElementById('root')
)
