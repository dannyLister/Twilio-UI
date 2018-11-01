import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (  
        <nav className="navbar navbar-light bg-light">
            <Link className="navbar-brand" to="/">Customer Details</Link>
        </nav>
    );
}
 
export default NavBar;