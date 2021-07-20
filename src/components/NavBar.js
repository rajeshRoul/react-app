import { Link } from 'react-router-dom';
import '../styles/NavBar.css';


function NavBar(){
    return (
        <div className="Navbar">
                <div><Link to="/Home">Home</Link></div>
                <div><Link to="/Profile">Profile</Link></div>
                <div><Link to="/SignUp">SignOut</Link></div>
                
                
                
        </div>
    )
}

export default NavBar;