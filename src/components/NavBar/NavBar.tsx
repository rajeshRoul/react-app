import React, { ReactElement, useContext } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import ToggleButton from '../ToggleButton/ToggleButton'
import { ThemeContext } from '../../util/themeContext'

function NavBar(): ReactElement {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <div className={`Navbar ${theme === 'Dark' && 'DarkModeNavBar'}`}>
            <div className="Link">
                <Link to="/Home">Home</Link>
            </div>
            <div className="Link">
                <Link to="/Profile">Profile</Link>
            </div>
            <div className="Link">
                <Link to="/AuthorList">Author List</Link>
            </div>
            <div className="Link">
                <Link to="/SignUp">SignOut</Link>
            </div>
            <div>
                <ToggleButton theme={theme} handleToggle={toggleTheme} />
            </div>
        </div>
    )
}

export default NavBar
