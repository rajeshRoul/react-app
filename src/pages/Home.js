import { Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Home(props){
    if(props.loggedIn){
        return(
            <div className="Home">
                <NavBar></NavBar>
                <div className="HomeContent">
                    <h1>Welcome to Homepage</h1>
                </div>
            </div>
        )
    }else{
        return (<Redirect to="/SignIn" />);
    }
    
}

export default Home;