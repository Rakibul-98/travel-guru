import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png'
import './Header.css'

const Header2 = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
                <img src={logo} alt=""/>
                
                <nav className="alter-nav">
                <input type="text"/>
                <Link to="/home"><small>Home</small></Link>
                <Link to="/book"><small>Destination</small></Link>
                <Link to="/blog"><small>Blog</small></Link>
                <Link to="/contact"><small>Contact</small></Link>
                {
                    loggedInUser.success ?  <Link style={{fontSize:"15px",fontWeight:"bold"}}>{loggedInUser.displayName || loggedInUser.name} </Link>
                      : <Link to ="/login">
                      <button className="main-btn"><small>Login</small></button>
                      </Link> 
                }
            </nav>
        </div>
    );
};

export default Header2;