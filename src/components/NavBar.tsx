import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

function NavBar(): ReactElement {
    return (
        <div className="Navbar">
            <div>
                <Link to="/Home">Home</Link>
            </div>
            <div>
                <Link to="/Profile">Profile</Link>
            </div>
            <div>
                <Link to="/AuthorList">Author List</Link>
            </div>
            <div>
                <Link to="/SignUp">SignOut</Link>
            </div>
        </div>
    )
}

export default NavBar
