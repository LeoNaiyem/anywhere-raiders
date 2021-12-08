import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div><Link className="brand" to='/home'>AnyWhere Riders</Link></div>
            <nav>
                <ul className ='nav-links'>
                    <li><Link className ="nav-link" to ='/home'>Home</Link></li>
                    <li><Link className ="nav-link" to ='/destination'>Destination</Link></li>
                    <li><Link className ="nav-link" to ='/blog' >Blog</Link></li>
                    <li><Link className ="nav-link" to ='/contact'>Contact</Link></li>                    
                    <li><Link className ="nav-link" to ='/private'>Private</Link></li>                    
                </ul>
            </nav>
            <Link className="login-btn" to='/login'>Login</Link>
        </div>
    );
};

export default Header;