import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navBar.css'

const NavBar = (props) => {
    return (  
        <nav className="navbar navbar-light bg-light navbar-custom">
            <Link className="navbar-brand" to="/">Customer Details</Link>
        </nav>
    );
}
 
export default NavBar;