import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleSignOut = () =>{
        setLoggedInUser({});
    }
    return (
        <div className="header">
            <div><Link className="brand" to='/home'>AnyWhere Riders</Link></div>
            <nav>
                <ul className ='nav-links'>
                    <li><Link className ="nav-link" to ='/home'>Home</Link></li>
                    <li><Link className ="nav-link" to ='/destination'>Destination</Link></li>
                    <li><Link className ="nav-link" to ='/blog' >Blog</Link></li>
                    <li><Link className ="nav-link" to ='/contact'>Contact</Link></li>                   
                </ul>
            </nav>
            {loggedInUser.email ? <button onClick = {handleSignOut} className="login-btn">Logout</button> :  <Link className="login-btn" to='/login'>Login</Link>}
        </div>
    );
};

export default Header;