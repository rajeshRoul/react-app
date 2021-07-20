import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <div className="Navbar">
            <h5>NAVBAR</h5>
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/SignUp">SignUp</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;